(function () {
  "use strict";

  const data = window.CAMPAIGN_ARMY_DATA;
  const app = document.getElementById("army-app");

  if (!data || !app) return;

  const armyFiles = {
    "rebels-of-bretonnia": "rebels-of-bretonnia.html",
    mousillon: "mousillon.html",
    "wildwood-host": "wildwood-host.html",
    "alliance-against-undeath": "alliance-against-undeath.html",
    "crusade-army": "crusade-army.html"
  };

  const leaderDestinations = {
    "gilles-king": "index.html#post-campaign-leadership",
    "louen-high-paladin": "crusade-army.html#outcome-louen-high-paladin",
    sacremor: "crusade-army.html#outcome-sacremor",
    "mallobaude-vampire-king": "mousillon.html#outcome-mallobaude-vampire-king",
    "louen-dispossessed": "index.html#post-campaign-leadership"
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function renderList(values, emptyText) {
    if (!values || !values.length) return `<p class="empty-field">${escapeHtml(emptyText)}</p>`;
    return `<ul>${values.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}</ul>`;
  }

  function renderProfiles(profiles) {
    if (!profiles || !profiles.length) {
      return '<p class="empty-field">Profile not specified in this supplement.</p>';
    }

    const preferred = ["M", "WS", "BS", "S", "T", "W", "I", "A", "Ld"];
    const present = new Set(profiles.flatMap((profile) => Object.keys(profile.stats || {})));
    const columns = preferred.filter((key) => present.has(key));
    [...present].filter((key) => !columns.includes(key)).forEach((key) => columns.push(key));

    return `
      <div class="profile-wrap">
        <table class="profile-table">
          <thead><tr><th>Profile</th>${columns.map((key) => `<th>${escapeHtml(key)}</th>`).join("")}</tr></thead>
          <tbody>
            ${profiles.map((profile) => `
              <tr>
                <td>${escapeHtml(profile.name)}</td>
                ${columns.map((key) => `<td>${escapeHtml((profile.stats || {})[key] ?? "—")}</td>`).join("")}
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`;
  }

  function renderOptions(options) {
    if (!options || !options.length) return '<p class="empty-field">No options transcribed.</p>';
    return options.map((option) => `
      <div class="option-row">
        <span>${escapeHtml(option.name)}${option.group ? ` <small>(${escapeHtml(option.group)})</small>` : ""}</span>
        <span class="option-cost">${escapeHtml(option.cost || "Not specified")}</span>
      </div>`).join("");
  }

  function renderUnitCard(reference, idPrefix) {
    const entry = data.entries[reference.id];
    if (!entry) return "";
    const cardId = `${idPrefix || "unit"}-${reference.id}`;
    const notes = [...(entry.notes || [])];
    if (reference.note) notes.unshift(reference.note);

    return `
      <details class="unit-card" id="${escapeHtml(cardId)}" data-search="${escapeHtml(`${entry.name} ${(entry.specialRules || []).join(" ")} ${(entry.equipment || []).join(" ")}`.toLowerCase())}">
        <summary>
          <span class="unit-name">${escapeHtml(entry.name)}</span>
          <span class="unit-price">${escapeHtml(entry.points || "Points not specified")}</span>
        </summary>
        <div class="unit-body">
          ${notes.map((note) => `<p class="unit-note">${escapeHtml(note)}</p>`).join("")}
          <div class="unit-meta">
            <span><strong>Unit size:</strong> ${escapeHtml(entry.unitSize || "Not specified")}</span>
            <span><strong>Troop type:</strong> ${escapeHtml(entry.troopType || "Not specified")}</span>
            <span class="status-pill ${entry.status === "referenced" ? "referenced" : ""}">${entry.status === "referenced" ? "Army-book reference" : "Campaign rule"}</span>
          </div>
          ${renderProfiles(entry.profiles)}
          <div class="unit-details">
            <section class="unit-detail">
              <h4>Equipment</h4>
              ${renderList(entry.equipment, "Not specified in this supplement.")}
            </section>
            <section class="unit-detail">
              <h4>Special Rules</h4>
              ${renderList(entry.specialRules, "Not specified in this supplement.")}
            </section>
            <section class="unit-detail options-list">
              <h4>Options</h4>
              ${renderOptions(entry.options)}
            </section>
          </div>
          <p class="unit-source"><strong>Reference:</strong> ${escapeHtml(entry.source || "The Revolt of Mallobaude")}.</p>
        </div>
      </details>`;
  }

  function renderNav(title) {
    return `
      <nav class="army-nav" aria-label="Campaign armies navigation">
        <a class="nav-title" href="index.html">${escapeHtml(title || "Campaign Armies")}</a>
        <a href="../index.html">Project Home</a>
        <a href="index.html">All Armies</a>
        <a href="../rules.html">Rules</a>
        <a href="../guide.html">Game Guide</a>
        <a href="../editorial/decisions.html">Editorial Log</a>
      </nav>`;
  }

  function renderCampaignRole(items) {
    if (!items || !items.length) return "";
    return `
      <section class="outcome-panel campaign-role" aria-labelledby="campaign-role-title">
        <h2 id="campaign-role-title">Where This Army Fits in the Campaign</h2>
        <div class="army-rules-grid">
          ${items.map((item) => `<div class="army-rule-item"><strong>${item.guideAnchor ? `<a href="../guide.html#${escapeHtml(item.guideAnchor)}">${escapeHtml(item.title)}</a>` : escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></div>`).join("")}
        </div>
      </section>`;
  }

  function renderOutcomeAdditions(additions) {
    if (!additions || !additions.length) return "";
    return `
      <section class="outcome-panel" aria-labelledby="outcome-title">
        <h2 id="outcome-title">Outcome-Dependent Additions</h2>
        <p>These entries are conditional. Their notes state which campaign conclusion permits them; they are not silently added to the printed list.</p>
        <div class="outcome-links">
          ${additions.map((reference) => {
            const entry = data.entries[reference.id];
            return `<div class="outcome-link"><a href="#outcome-${escapeHtml(reference.id)}">${escapeHtml(entry.name)}</a><span>${escapeHtml(reference.note || "See the campaign outcome.")}</span></div>`;
          }).join("")}
        </div>
      </section>`;
  }

  function renderArmyPage(armyId) {
    const army = data.armies[armyId];
    if (!army) {
      app.innerHTML = `${renderNav("Campaign Armies")}<main class="army-hub"><h1>Army not found</h1></main>`;
      return;
    }

    document.title = `${army.name} — Campaign Armies`;
    const categoryLinks = army.categories.map((category) => `<a href="#${slug(category.name)}">${escapeHtml(category.name)}</a>`).join("");

    app.innerHTML = `
      ${renderNav(army.name)}
      <header class="army-header">
        <p class="eyebrow">The Revolt of Mallobaude · Campaign Army Reference</p>
        <h1>${escapeHtml(army.name)}</h1>
        <p class="subtitle">${escapeHtml(army.subtitle)}</p>
        <div class="army-toolbar">
          <div>
            <div class="source-chip-row">
              <a class="source-chip" href="../rules.html#rules-page-${army.sourcePage}">Campaign rules, p. ${army.sourcePage}</a>
              ${army.books.map((book) => `<span class="source-chip">${escapeHtml(book)}</span>`).join("")}
            </div>
            <nav class="category-jump" aria-label="Army categories">${categoryLinks}</nav>
          </div>
          <div class="army-filter">
            <label for="army-search">Find a unit or rule</label>
            <input id="army-search" type="search" placeholder="Search this army…" autocomplete="off">
            <div class="army-actions">
              <button id="expand-all" type="button">Expand all</button>
              <button id="collapse-all" type="button">Collapse all</button>
            </div>
          </div>
        </div>
      </header>
      <main class="army-content">
        ${renderCampaignRole(army.campaignRole)}
        <section class="army-rules" aria-labelledby="army-rules-title">
          <h2 id="army-rules-title">Army-Specific Rules</h2>
          <div class="army-rules-grid">
            ${army.rules.map((rule) => `<div class="army-rule-item"><strong>${escapeHtml(rule.name)}</strong><p>${escapeHtml(rule.detail)}</p></div>`).join("")}
          </div>
        </section>
        ${renderOutcomeAdditions(army.outcomeAdditions)}
        <p class="source-note">${escapeHtml(data.sourceNote)} Missing fields are deliberately marked instead of inferred.</p>
        ${army.categories.map((category) => `
          <section class="army-category" id="${slug(category.name)}">
            <h2 class="category-title">${escapeHtml(category.name)}</h2>
            <div class="unit-list">${category.entries.map((reference) => renderUnitCard(reference, "unit")).join("")}</div>
          </section>`).join("")}
        ${army.outcomeAdditions && army.outcomeAdditions.length ? `
          <section class="army-category outcome-category" id="outcome-dependent-profiles">
            <h2 class="category-title">Outcome-Dependent Profiles</h2>
            <div class="unit-list">${army.outcomeAdditions.map((reference) => renderUnitCard(reference, "outcome")).join("")}</div>
          </section>` : ""}
      </main>`;

    const cards = [...document.querySelectorAll(".unit-card")];
    const search = document.getElementById("army-search");
    search.addEventListener("input", () => {
      const query = search.value.trim().toLowerCase();
      cards.forEach((card) => {
        card.hidden = Boolean(query) && !card.dataset.search.includes(query);
        if (query && !card.hidden) card.open = true;
      });
    });
    document.getElementById("expand-all").addEventListener("click", () => cards.forEach((card) => { if (!card.hidden) card.open = true; }));
    document.getElementById("collapse-all").addEventListener("click", () => cards.forEach((card) => { card.open = false; }));

    let printState = [];
    window.addEventListener("beforeprint", () => {
      printState = cards.map((card) => card.open);
      cards.forEach((card) => { card.open = true; });
    });
    window.addEventListener("afterprint", () => cards.forEach((card, index) => { card.open = printState[index]; }));

    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target && target.matches("details")) target.open = true;
    }
  }

  function renderHub() {
    document.title = "Campaign Armies — The Revolt of Mallobaude";
    const armies = Object.entries(data.armies);
    app.innerHTML = `
      ${renderNav("Campaign Armies")}
      <main class="army-hub">
        <p class="eyebrow">The Revolt of Mallobaude · Army-List Reference</p>
        <h1>Campaign Armies</h1>
        <p class="intro">Compact, searchable army-building references for every campaign list in the supplement. Campaign rules take precedence over the referenced army books; unknown details remain visibly unfilled for later review.</p>
        <section class="army-card-grid" aria-label="Campaign army lists">
          ${armies.map(([id, army]) => `
            <a class="army-choice-card" href="${armyFiles[id]}">
              <span class="card-label">Rules page ${army.sourcePage}</span>
              <h2>${escapeHtml(army.name)}</h2>
              <p>${escapeHtml(army.subtitle)}</p>
              <span class="card-footer">Open army reference →</span>
            </a>`).join("")}
        </section>
        <section class="leadership-panel" id="post-campaign-leadership" aria-labelledby="leadership-title">
          <p class="eyebrow">Branching Campaign Outcomes</p>
          <h2 id="leadership-title">Post-Campaign Leadership</h2>
          <p>The campaign produces different rulers and commanders. These are alternatives tied to their stated ending, not a pool of characters available together.</p>
          <div class="outcome-links">
            ${data.postCampaignLeaders.map((reference) => {
              const entry = data.entries[reference.id];
              return `<div class="outcome-link"><a href="${leaderDestinations[reference.id]}">${escapeHtml(entry.name)}</a><span>${escapeHtml(reference.note)}</span></div>`;
            }).join("")}
          </div>
        </section>
        <p class="hub-note"><strong>Crusade distinction:</strong> the page 41 Crusade Army serves Conclusions I and II. Conclusion III's “Crusaders of Despair” are instead represented by Bretonnian mercenary allies in an Order army; they do not use the page 41 roster.</p>
      </main>`;
  }

  const armyId = document.body.dataset.army;
  if (armyId) renderArmyPage(armyId);
  else renderHub();
})();
