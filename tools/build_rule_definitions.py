from __future__ import annotations

import json
import re
import time
import unicodedata
from pathlib import Path
from urllib.parse import quote, urljoin
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
ARMY_DATA = ROOT / "armies" / "army-data.js"
OUTPUT = ROOT / "armies" / "rule-definitions.js"
INDEX_URL = "https://8th.whfb.app/special-rules"
USER_AGENT = "Mozilla/5.0 (compatible; Mallobaude-English-Reference/1.0)"


ALIASES = {
    "always strike first": "always strikes first",
    "aura of the fay": "aura of the fey",
    "blessing of the ancients": "blessings of the ancients",
    "detachment": "detachments",
    "forest strider": "strider",
    "general of undeath": "generals of undeath",
    "impetuous": "impetuous bretonnia",
    "loec s shadow dance": "shadow dances of loec",
    "master of dead": "master of the dead",
    "rancid maw": "rancid maws",
    "regimental unit": "regimental units",
    "scout": "scouts",
    "skirmisher": "skirmishers",
}


DIRECT_PATHS = {
    "dread knight": "/magic-item/dread-knight",
    "red fury": "/magic-item/red-fury",
    "the lady s champion": "/special-rules/the-ladys-champion",
    "the peasant s duty": "/special-rules/the-peasants-duty",
    "chalice of potions": "/magic-item/the-chalice-of-potions",
    "virtue of knightly temper": "/magic-item/virtue-of-knightly-temper",
    "virtue of purity": "/magic-item/virtue-of-purity",
}


def fetch(url: str) -> bytes:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=45) as response:
        return response.read()


def normalise(value: str) -> str:
    value = value.replace("�", "'").replace("’", "'").replace("–", "-")
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode().lower()
    value = re.sub(r"^the\s+", "", value)
    return re.sub(r"[^a-z0-9]+", " ", value).strip()


def load_data() -> dict:
    source = ARMY_DATA.read_text(encoding="utf-8")
    prefix = "window.CAMPAIGN_ARMY_DATA = "
    if not source.startswith(prefix):
        raise RuntimeError("Unexpected army-data.js wrapper")
    return json.loads(source[len(prefix) :].removesuffix(";\n"))


def roster_rule_names(data: dict) -> list[str]:
    entry_ids: set[str] = set()
    for army in data["armies"].values():
        for category in army["categories"]:
            entry_ids.update(reference["id"] for reference in category["entries"])
        entry_ids.update(reference["id"] for reference in army.get("outcomeAdditions", []))
    return sorted(
        {
            rule
            for entry_id in entry_ids
            for rule in data["entries"][entry_id].get("specialRules", [])
        }
    )


def index_links() -> dict[str, tuple[str, str]]:
    soup = BeautifulSoup(fetch(INDEX_URL), "html.parser")
    links: dict[str, tuple[str, str]] = {}
    for anchor in soup.select('main a[href^="/special-rules/"]'):
        title = anchor.get_text(" ", strip=True)
        links[normalise(title)] = (title.replace("�", "'"), urljoin(INDEX_URL, anchor["href"]))
    return links


def clean_article(html: bytes) -> tuple[str, str, str]:
    soup = BeautifulSoup(html, "html.parser")
    heading = soup.select_one("main h1")
    article = soup.select_one("main article.article--rich-text")
    page_reference = soup.select_one("main .page-reference")
    if not heading or not article:
        raise RuntimeError("Rule page did not contain the expected heading and article")

    for element in article.select("svg"):
        element.decompose()
    for element in article.select("a, span"):
        element.unwrap()
    for element in article.find_all(True):
        if element.name not in {"p", "h2", "h3", "h4", "ul", "ol", "li", "table", "thead", "tbody", "tr", "th", "td", "em", "strong", "br"}:
            element.unwrap()
        else:
            element.attrs = {}
            if element.name in {"h2", "h3"}:
                element.name = "h4"

    cleaned = "".join(str(child) for child in article.children).strip().replace("�", "'")
    title = next(heading.stripped_strings).replace("�", "'")
    reference = page_reference.get_text(" ", strip=True).replace("�", "'") if page_reference else ""
    return title, reference, cleaned


def candidate_keys(rule_name: str) -> list[str]:
    exact = normalise(rule_name)
    without_parameter = normalise(re.sub(r"\s*\([^)]*\)\s*$", "", rule_name))
    keys = [exact]
    if without_parameter != exact:
        keys.append(without_parameter)
    return [ALIASES.get(key, key) for key in keys]


def main() -> None:
    data = load_data()
    rules = roster_rule_names(data)
    links = index_links()
    definitions: dict[str, dict[str, str]] = {}
    cache: dict[str, tuple[str, str, str]] = {}
    found = 0

    for rule_name in rules:
        url = None
        for key in candidate_keys(rule_name):
            if key in DIRECT_PATHS:
                url = urljoin(INDEX_URL, DIRECT_PATHS[key])
                break
            if key in links:
                url = links[key][1]
                break

        if not url:
            definitions[rule_name] = {
                "title": rule_name,
                "html": "",
                "status": "unresolved",
                "searchUrl": f"https://8th.whfb.app/search?q={quote(rule_name)}",
            }
            continue

        if url not in cache:
            cache[url] = clean_article(fetch(url))
            time.sleep(0.04)
        source_title, reference, article_html = cache[url]
        definitions[rule_name] = {
            "title": rule_name,
            "html": article_html,
            "status": "official-index",
            "sourceTitle": source_title,
            "sourceReference": reference,
            "sourceUrl": url,
        }
        found += 1

    payload = {
        "version": 1,
        "source": INDEX_URL,
        "sourceNote": "Official WFB8 rule text indexed by 8th.whfb.app; campaign-original definitions are supplied separately by this project.",
        "definitions": definitions,
    }
    OUTPUT.write_text(
        "window.WHFB_RULE_DEFINITIONS = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUTPUT} with {found}/{len(rules)} indexed definitions ({len(cache)} source pages fetched)")


if __name__ == "__main__":
    main()
