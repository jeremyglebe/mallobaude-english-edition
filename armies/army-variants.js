window.CAMPAIGN_ARMY_VARIANTS = {
  "version": 1,
  "armies": {
    "morrsliebs-laughing-masses": {
      "name": "Morrslieb's Laughing Masses",
      "subtitle": "Mousillon's peasantry erupting into monstrous new shapes beneath the grinning Chaos moon",
      "sourcePage": 45,
      "eyebrow": "The Year of Woe · Optional Project-Created Four-Player Variant",
      "cardLabel": "Optional project-created scenario force",
      "sourceLabel": "Daemonic Assault on Mousillon, pp. 45–46",
      "sourceHref": "../rules.html#rules-page-45",
      "books": [
        "WAP Beastmen · Discord Archive 8th Edition",
        "WAP Bretonnia · Discord Archive 8th Edition",
        "WAP Warriors of Chaos · Discord Archive 8th Edition",
        "WAP The Empire · Discord Archive 8th Edition",
        "WAP Cult of Ulric · Discord Archive 8th Edition",
        "The Revolt of Mallobaude"
      ],
      "sourceNote": "This optional project-created variant uses the listed WAP 8th Edition sources for unit profiles and options.",
      "campaignRole": [
        {
          "title": "Daemonic Assault on Mousillon — Four-Player Variant",
          "detail": "Use the Laughing Masses as an independent fourth army in Daemonic Assault on Mousillon. All other scenario rules remain unchanged except as stated below."
        }
      ],
      "rules": [
        {
          "name": "Four Armies, Four Generals",
          "detail": "Moonclaw, Son of Morrslieb is compulsory and must be the Laughing Masses' General. Mallobaude the Black Knight, Kairos Fateweaver, and Ku'gath Plaguefather remain compulsory and must be the Generals of their respective armies."
        },
        {
          "name": "From Every Ruin",
          "detail": "Every unit in the army gains Ambushers and must begin in reserve. After terrain is placed but before deployment, secretly assign each unit to one table edge, building, or fortress section. Any number of units may share an edge, but no more than one unit may be assigned to each building or fortress section. This assignment replaces the normal Ambushers roll for the arrival edge. Moonclaw arrives automatically in the Remaining Moves sub-phase of the Laughing Masses' turn in battle round 2. For each other unit, roll at the start of the Laughing Masses' turn: it arrives on 3+ in battle round 2, on 2+ in battle round 3, and automatically in battle round 4. A successful unit enters in that turn's Remaining Moves sub-phase. A unit assigned to an edge enters as Reinforcements from that edge. A unit assigned to a building or fortress section is placed with at least one model within 3 inches of it, then formed as closely as possible while remaining more than 1 inch from enemies and impassable terrain; this is its entire move and it cannot charge that turn. If legal placement is impossible, the unit remains in reserve and may use the nearest table edge on its next arrival attempt. If the assigned feature has been removed, measure from its former footprint."
        },
        {
          "name": "The Last Player to Stir",
          "detail": "The Laughing Masses do not participate in battle round 1. From battle round 2 onward, include the Laughing Masses when determining turn order normally using the scenario's Triumph & Treachery rules."
        },
        {
          "name": "A Riot, Not a Regiment",
          "detail": "Every unit whose troop type is Infantry gains the Skirmishers special rule. This does not apply to Cavalry, Monstrous Infantry, Monstrous Beasts, War Beasts, Chariots, Monsters, or War Machines. Moonclaw is therefore not a Skirmisher."
        },
        {
          "name": "Seized Engines",
          "detail": "A War Machine arriving from reserve is placed with the machine and all of its crew wholly within 3 inches of its assigned table edge, building, or fortress section and more than 1 inch from enemies and impassable terrain. This placement is permitted even if the machine could not normally move. It counts as entering as Reinforcements, cannot move any farther, counts as having moved, and cannot shoot or charge that turn unless another rule expressly allows it to do so."
        },
        {
          "name": "Morrslieb Laughs Last",
          "detail": "Resolve this before the printed scenario's objective points. If the Laughing Masses have strictly more ordinary Victory Points than each of the other three armies, they win outright regardless of scenario-objective totals. Otherwise they cannot win; remove them from consideration and determine the winner among Mallobaude, Kairos, and Ku'gath using the printed objective system and its Victory Point tiebreaker. A tie for the highest Victory Point total is not enough for the Masses. If the Masses slay Kairos or Ku'gath, Mallobaude still receives the printed 1 point because that Daemon was slain, but not the additional point for his army delivering the killing blow. If the Masses slay Mallobaude, neither Daemon army scores the points that require its own army to kill him."
        },
        {
          "name": "After the Laughter",
          "detail": "If the Laughing Masses win, Mallobaude does not receive the four Ancient Relic results. The Masses receive no campaign reward of their own, and the campaign still proceeds to Stage 2, The Revolt. A General slain in this scenario returns for later campaign stages unless another campaign rule expressly says otherwise."
        },
        {
          "name": "Stolen Bretonnian Engines",
          "detail": "Ballistas, Mangonels, Field Trebuchets, and Bombards all count as the same Rare choice for duplicate limits. Each Bombard counts as two Rare choices."
        }
      ],
      "categories": [
        {
          "name": "Heroes",
          "entries": [
            {
              "id": "wap-moonclaw"
            },
            {
              "id": "anarchist-jester"
            }
          ]
        },
        {
          "name": "Core Units",
          "entries": [
            {
              "id": "wap-mutants"
            },
            {
              "id": "wap-peasant-levy"
            },
            {
              "id": "wap-men-at-arms"
            },
            {
              "id": "wap-peasant-bowmen"
            }
          ]
        },
        {
          "name": "Special Units",
          "entries": [
            {
              "id": "wap-chaos-spawn"
            },
            {
              "id": "wap-squires"
            },
            {
              "id": "wap-yeomen"
            },
            {
              "id": "wap-forsaken"
            },
            {
              "id": "wap-flayerkin"
            },
            {
              "id": "wap-flagellants"
            },
            {
              "id": "wap-wolf-kin"
            }
          ]
        },
        {
          "name": "Rare Units",
          "entries": [
            {
              "id": "wap-ballista"
            },
            {
              "id": "wap-mangonel"
            },
            {
              "id": "wap-field-trebuchet"
            },
            {
              "id": "wap-bombard"
            },
            {
              "id": "wap-children-of-ulric"
            }
          ]
        }
      ]
    }
  },
  "entries": {
    "wap-moonclaw": {
      "name": "Moonclaw, Son of Morrslieb",
      "comparedTo": "Moonclaw, Son of Morrslieb in WAP Beastmen.",
      "points": "200 points",
      "unitSize": "1",
      "troopType": "Cavalry (Special Character)",
      "profiles": [
        {
          "name": "Moonclaw",
          "stats": { "M": "5", "WS": "3", "BS": "3", "S": "4", "T": "4", "W": "2", "I": "3", "A": "3", "Ld": "7" }
        },
        {
          "name": "Umbralok",
          "stats": { "M": "7", "WS": "3", "BS": "0", "S": "4", "T": "4", "W": "1", "I": "3", "A": "3", "Ld": "6" }
        }
      ],
      "equipment": ["Hand weapon", "Umbralok (mount)"],
      "specialRules": ["Primal Fury", "Ward save (5+)", "Magic Resistance (2)", "Wave of Insanity", "Unholy Zenith"],
      "options": [],
      "notes": ["Level 1 Wizard. Choose the Lore of Shadow or the Lore of the Wild."],
      "source": "Warhammer — Beastmen, Discord Archive 8th Edition, pp. 102 and 113",
      "status": "campaign",
      "statusLabel": "Laughing Masses character"
    },
    "anarchist-jester": {
      "name": "Anarchist Jester",
      "comparedTo": "Jules the Jester in WAP Bretonnia.",
      "points": "50 points (provisional)",
      "unitSize": "1",
      "troopType": "Infantry (Character)",
      "profiles": [
        {
          "name": "Anarchist Jester",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "4", "A": "1", "Ld": "6" }
        },
        {
          "name": "Warhorse (optional mount)",
          "stats": { "M": "8", "WS": "3", "BS": "0", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "5" }
        }
      ],
      "equipment": ["Hand weapon"],
      "specialRules": ["The Peasant's Duty", "Acrobatic", "I Will Taunt You Viciously a Second Time", "Skirmishers"],
      "options": [
        { "name": "Additional hand weapon", "cost": "+2 points" },
        { "name": "Flail", "cost": "+6 points" },
        { "name": "Great weapon", "cost": "+6 points" },
        { "name": "Throwing axes", "cost": "+4 points" },
        { "name": "Light armour", "cost": "+2 points" },
        { "name": "Shield", "cost": "+2 points" },
        { "name": "Warhorse", "cost": "+12 points", "description": "A mounted Jester becomes Cavalry and does not gain Skirmishers." },
        { "name": "Common magic items", "cost": "Up to 50 points" }
      ],
      "notes": [
        "Skirmishers is granted by A Riot, Not a Regiment only while the Jester is on foot; taking a Warhorse changes his troop type to Cavalry and removes it.",
        "Choose at most one of additional hand weapon, flail, or great weapon.",
        "The effects of I Will Taunt You Viciously a Second Time from multiple Anarchist Jesters do not stack."
      ],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, pp. 134 and 150 (Jules the Jester)",
      "status": "campaign",
      "statusLabel": "Laughing Masses character"
    },
    "wap-mutants": {
      "name": "Mutants",
      "comparedTo": "Mutants in WAP Beastmen.",
      "points": "3 points per model",
      "unitSize": "20+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Mutant",
          "stats": { "M": "4", "WS": "3", "BS": "3", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "6" }
        },
        {
          "name": "Mutant Leader",
          "stats": { "M": "4", "WS": "3", "BS": "3", "S": "3", "T": "3", "W": "1", "I": "3", "A": "2", "Ld": "6" }
        }
      ],
      "equipment": ["Hand weapon"],
      "specialRules": ["Chaos Mutations", "Skirmishers"],
      "options": [
        { "name": "Upgrade one Mutant to a Mutant Leader", "cost": "+10 points" }
      ],
      "source": "Warhammer — Beastmen, Discord Archive 8th Edition, pp. 67 and 115",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-peasant-levy": {
      "name": "Peasant Levy",
      "comparedTo": "Peasant Levy in WAP Bretonnia.",
      "points": "2 points per model",
      "unitSize": "20+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Peasant",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "4" }
        },
        {
          "name": "Rabble Leader",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "2", "Ld": "4" }
        },
        {
          "name": "Truffle Hound",
          "stats": { "M": "7", "WS": "3", "BS": "0", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "3" }
        }
      ],
      "equipment": ["Hand weapon"],
      "specialRules": ["Disorganized Mob", "The Peasant's Duty", "Skirmishers", "Truffle Madness"],
      "options": [
        { "name": "Upgrade one Peasant to a Rabble Leader", "cost": "+10 points" },
        { "name": "Musician", "cost": "+10 points" },
        { "name": "Standard bearer", "cost": "+10 points" },
        { "name": "Throwing weapons", "cost": "+½ point per model" },
        { "name": "Slings", "cost": "+1 point per model" },
        { "name": "Up to three Truffle Hounds", "cost": "+10 points each" }
      ],
      "notes": ["Each purchased Truffle Hound is a Warbeast equipped with fangs; its profile is shown above, but it remains attached to this parent unit until Truffle Madness reveals it."],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, pp. 105, 109, and 153",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-men-at-arms": {
      "name": "Men-at-Arms",
      "comparedTo": "Men-at-Arms in WAP Bretonnia.",
      "points": "5 points per model",
      "unitSize": "10+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Man-at-Arms",
          "stats": { "M": "4", "WS": "3", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "6" }
        },
        {
          "name": "Yeoman Warden",
          "stats": { "M": "4", "WS": "3", "BS": "3", "S": "3", "T": "3", "W": "1", "I": "3", "A": "2", "Ld": "6" }
        },
        {
          "name": "Truffle Hound",
          "stats": { "M": "7", "WS": "3", "BS": "0", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "3" }
        }
      ],
      "equipment": ["Hand weapon", "Halberd", "Light armour"],
      "specialRules": ["The Peasant's Duty", "Skirmishers", "Truffle Madness"],
      "options": [
        { "name": "Upgrade one Man-at-Arms to a Yeoman Warden", "cost": "+10 points" },
        { "name": "Musician", "cost": "+10 points" },
        { "name": "Standard bearer", "cost": "+10 points" },
        { "name": "Replace halberds with spears and shields", "cost": "Free" },
        { "name": "Shields while retaining halberds", "cost": "+½ point per model" },
        { "name": "Up to three Truffle Hounds", "cost": "+10 points each" }
      ],
      "notes": ["Each purchased Truffle Hound is a Warbeast equipped with fangs; its profile is shown above, but it remains attached to this parent unit until Truffle Madness reveals it."],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, pp. 105 and 153",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-peasant-bowmen": {
      "name": "Peasant Bowmen",
      "comparedTo": "Peasant Bowmen in WAP Bretonnia.",
      "points": "5 points per model",
      "unitSize": "10+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Bowman",
          "stats": { "M": "4", "WS": "2", "BS": "3", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "5" }
        },
        {
          "name": "Villein",
          "stats": { "M": "4", "WS": "2", "BS": "4", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "5" }
        },
        {
          "name": "Truffle Hound",
          "stats": { "M": "7", "WS": "3", "BS": "0", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "3" }
        }
      ],
      "equipment": ["Hand weapon", "Long bow"],
      "specialRules": ["The Peasant's Duty", "Skirmishers", "Truffle Madness"],
      "options": [
        { "name": "Upgrade one Bowman to a Villein", "cost": "+10 points" },
        { "name": "Musician", "cost": "+10 points" },
        { "name": "Standard bearer", "cost": "+10 points" },
        { "name": "Braziers (Flaming Attacks)", "cost": "+½ point per model" },
        { "name": "Light armour", "cost": "+½ point per model" },
        { "name": "Up to three Truffle Hounds", "cost": "+10 points each" }
      ],
      "notes": [
        "Each purchased Truffle Hound is a Warbeast equipped with fangs; its profile is shown above, but it remains attached to this parent unit until Truffle Madness reveals it.",
        "Peasant Bowmen may not take Defensive Stakes."
      ],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, pp. 105, 108, and 153",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-chaos-spawn": {
      "name": "Chaos Spawn",
      "comparedTo": "Unmarked Chaos Spawn in WAP Beastmen.",
      "points": "50 points",
      "unitSize": "1",
      "troopType": "Monstrous Beast",
      "profiles": [
        {
          "name": "Chaos Spawn",
          "stats": { "M": "3D6", "WS": "3", "BS": "0", "S": "4", "T": "5", "W": "3", "I": "2", "A": "*", "Ld": "10" }
        }
      ],
      "equipment": ["Tentacles, claws, and teeth"],
      "specialRules": ["Fear", "Random Movement (3D6)", "Random Attacks (D6+1)", "Unbreakable"],
      "options": [],
      "notes": [],
      "source": "Warhammer — Beastmen, Discord Archive 8th Edition, p. 118",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-squires": {
      "name": "Squires",
      "comparedTo": "Squires in WAP Bretonnia.",
      "points": "7 points per model",
      "unitSize": "5+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Squire",
          "stats": { "M": "4", "WS": "3", "BS": "3", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "6" }
        },
        {
          "name": "Equerry",
          "stats": { "M": "4", "WS": "3", "BS": "3", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "6" }
        }
      ],
      "equipment": ["Hand weapon", "Long bow"],
      "specialRules": ["The Peasant's Duty", "Skirmishers"],
      "options": [
        { "name": "Upgrade one Squire to an Equerry", "cost": "+10 points" },
        { "name": "Musician", "cost": "+10 points" },
        { "name": "Standard bearer", "cost": "+10 points" }
      ],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, p. 154",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-yeomen": {
      "name": "Yeomen",
      "comparedTo": "Yeomen in WAP Bretonnia.",
      "points": "10 points per model",
      "unitSize": "5+",
      "troopType": "Cavalry",
      "profiles": [
        {
          "name": "Yeoman",
          "stats": { "M": "4", "WS": "3", "BS": "3", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "6" }
        },
        {
          "name": "Warden",
          "stats": { "M": "4", "WS": "3", "BS": "3", "S": "3", "T": "3", "W": "1", "I": "3", "A": "2", "Ld": "6" }
        },
        {
          "name": "Horse",
          "stats": { "M": "8", "WS": "3", "BS": "0", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "5" }
        }
      ],
      "equipment": ["Hand weapon", "Horse (mount)"],
      "specialRules": ["Fast Cavalry", "The Peasant's Duty"],
      "options": [
        { "name": "Upgrade one Yeoman to a Warden", "cost": "+10 points" },
        { "name": "Musician", "cost": "+10 points" },
        { "name": "Standard bearer", "cost": "+10 points" },
        { "name": "Spears", "cost": "+1 point per model" },
        { "name": "Bows or crossbows", "cost": "+2 points per model" },
        { "name": "Shields", "cost": "+1 point per model" },
        { "name": "Light armour", "cost": "+1 point per model" }
      ],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, p. 155",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-forsaken": {
      "name": "Warped Ones",
      "comparedTo": "Forsaken in WAP Warriors of Chaos.",
      "points": "15 points per model",
      "unitSize": "5+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Warped One",
          "stats": { "M": "6", "WS": "4", "BS": "0", "S": "4", "T": "4", "W": "1", "I": "4", "A": "D3", "Ld": "8" }
        }
      ],
      "equipment": ["Hand weapon", "Heavy armour"],
      "specialRules": ["Frenzy", "Immune to Psychology", "Random Attacks (D3)", "Skirmishers", "Freakish Mutations"],
      "options": [
        { "name": "Mark of Khorne (Hatred)", "cost": "+1 point per model" },
        { "name": "Mark of Nurgle (Fear)", "cost": "+1 point per model" },
        { "name": "Mark of Slaanesh (Swiftstride)", "cost": "+1 point per model" },
        { "name": "Mark of Tzeentch (6+ Ward save)", "cost": "+1 point per model" }
      ],
      "notes": ["Warped Ones are a Special choice in this army.", "A unit of Warped Ones may select at most one Mark."],
      "source": "Ravening Hordes — Warriors of Chaos, Discord Archive 8th Edition, pp. 4 and 21",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-flayerkin": {
      "name": "Ruin-Crawlers",
      "comparedTo": "Flayerkin in WAP Warriors of Chaos.",
      "points": "9 points per model",
      "unitSize": "5+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Ruin-Crawler",
          "stats": { "M": "4", "WS": "4", "BS": "3", "S": "4", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "7" }
        },
        {
          "name": "Ruin-Stalker",
          "stats": { "M": "4", "WS": "4", "BS": "3", "S": "4", "T": "3", "W": "1", "I": "3", "A": "2", "Ld": "7" }
        }
      ],
      "equipment": ["Two hand weapons"],
      "specialRules": ["Killing Blow", "Scouts", "Skirmishers", "Obstacle Strider"],
      "options": [
        { "name": "Upgrade one Ruin-Crawler to a Ruin-Stalker", "cost": "+10 points" }
      ],
      "notes": ["From Every Ruin requires this unit to begin in reserve, so Scouts does not permit it to deploy before the battle."],
      "source": "Ravening Hordes — Warriors of Chaos, Discord Archive 8th Edition, p. 23",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-flagellants": {
      "name": "Raving Mob",
      "comparedTo": "Flagellants in WAP The Empire.",
      "points": "9 points per model",
      "unitSize": "10+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Raver",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "6" }
        },
        {
          "name": "Rabble-Rouser",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "2", "Ld": "6" }
        }
      ],
      "equipment": ["Flail"],
      "specialRules": ["Frenzy", "Unbreakable", "The End is Nigh!", "Skirmishers"],
      "options": [
        { "name": "Upgrade one Raver to a Rabble-Rouser", "cost": "+10 points" },
        { "name": "Musician", "cost": "+10 points" },
        { "name": "Standard bearer", "cost": "+10 points" }
      ],
      "source": "Ravening Hordes — The Empire, Discord Archive 8th Edition, pp. 3 and 16",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-wolf-kin": {
      "name": "Wolf-Mutants",
      "comparedTo": "Wolf-Kin in WAP Cult of Ulric.",
      "points": "9 points per model",
      "unitSize": "10+",
      "troopType": "Infantry",
      "profiles": [
        {
          "name": "Wolf-Mutant",
          "stats": { "M": "4", "WS": "4", "BS": "3", "S": "4", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "8" }
        },
        {
          "name": "Pack Alpha",
          "stats": { "M": "4", "WS": "4", "BS": "3", "S": "4", "T": "3", "W": "1", "I": "3", "A": "2", "Ld": "8" }
        }
      ],
      "equipment": ["Hand weapon"],
      "specialRules": ["Crush the Weak", "Hatred", "Skirmishers", "Stubborn"],
      "options": [
        { "name": "Upgrade one Wolf-Mutant to a Pack Alpha", "cost": "+10 points" },
        { "name": "Musician", "cost": "+10 points" },
        { "name": "Standard bearer", "cost": "+10 points" },
        { "name": "Great weapons", "cost": "+2 points per model" },
        { "name": "Additional hand weapons", "cost": "+1 point per model" },
        { "name": "Shields", "cost": "+1 point per model" },
        { "name": "Light armour", "cost": "+1 point per model" }
      ],
      "notes": ["Choose at most one of great weapons or additional hand weapons."],
      "source": "Warhammer — Cult of Ulric, Discord Archive 8th Edition, pp. 40 and 57",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-ballista": {
      "name": "Ballista",
      "comparedTo": "Ballista in WAP Bretonnia.",
      "points": "35 points",
      "unitSize": "1 (2 Peasant Crew)",
      "troopType": "War Machine (Bolt Thrower)",
      "profiles": [
        {
          "name": "Ballista",
          "stats": { "M": "—", "WS": "—", "BS": "—", "S": "—", "T": "7", "W": "3", "I": "—", "A": "—", "Ld": "—" }
        },
        {
          "name": "Peasant Crew",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "5" }
        }
      ],
      "equipment": ["Hand weapon (crew)"],
      "specialRules": ["The Peasant's Duty"],
      "options": [
        { "name": "Wall Warden", "cost": "+10 points", "description": "Once per game, re-roll one Artillery die or failed To Hit roll." },
        { "name": "Additional Peasant Crew", "cost": "+3 points" }
      ],
      "notes": [],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, pp. 118 and 157",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-mangonel": {
      "name": "Mangonel",
      "comparedTo": "Mangonel in WAP Bretonnia.",
      "points": "85 points",
      "unitSize": "1 (3 Peasant Crew)",
      "troopType": "War Machine (Stone Thrower)",
      "profiles": [
        {
          "name": "Mangonel",
          "stats": { "M": "—", "WS": "—", "BS": "—", "S": "—", "T": "7", "W": "3", "I": "—", "A": "—", "Ld": "—" }
        },
        {
          "name": "Peasant Crew",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "5" }
        }
      ],
      "equipment": ["Hand weapon (crew)"],
      "specialRules": ["The Peasant's Duty"],
      "options": [
        { "name": "Wall Warden", "cost": "+15 points", "description": "Once per game, re-roll one Artillery die or failed To Hit roll." },
        { "name": "Additional Peasant Crew", "cost": "+3 points" }
      ],
      "notes": [],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, pp. 118 and 157",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-field-trebuchet": {
      "name": "Field Trebuchet",
      "comparedTo": "Field Trebuchet in WAP Bretonnia.",
      "points": "100 points",
      "unitSize": "1 (4 Peasant Crew)",
      "troopType": "War Machine (Stone Thrower)",
      "profiles": [
        {
          "name": "Field Trebuchet",
          "stats": { "M": "—", "WS": "—", "BS": "—", "S": "—", "T": "7", "W": "4", "I": "—", "A": "—", "Ld": "—" }
        },
        {
          "name": "Peasant Crew",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "5" }
        }
      ],
      "equipment": ["Hand weapon (crew)"],
      "specialRules": ["Field Trebuchet", "The Peasant's Duty"],
      "options": [
        { "name": "Wall Warden", "cost": "+15 points", "description": "Once per game, re-roll one Artillery die or failed To Hit roll." }
      ],
      "notes": [],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, pp. 119 and 157",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-bombard": {
      "name": "Bombard",
      "comparedTo": "Bombard in WAP Bretonnia.",
      "points": "90 points",
      "unitSize": "1 (3 Peasant Crew)",
      "troopType": "War Machine (Cannon)",
      "profiles": [
        {
          "name": "Bombard",
          "stats": { "M": "—", "WS": "—", "BS": "—", "S": "—", "T": "7", "W": "3", "I": "—", "A": "—", "Ld": "—" }
        },
        {
          "name": "Peasant Crew",
          "stats": { "M": "4", "WS": "2", "BS": "2", "S": "3", "T": "3", "W": "1", "I": "3", "A": "1", "Ld": "5" }
        }
      ],
      "equipment": ["Hand weapon (crew)"],
      "specialRules": ["Bombard", "The Peasant's Duty"],
      "options": [
        { "name": "Wall Warden", "cost": "+15 points", "description": "Once per game, re-roll one Artillery die or failed To Hit roll." },
        { "name": "Additional Peasant Crew", "cost": "+3 points" }
      ],
      "notes": [],
      "source": "Warhammer — Bretonnia, Discord Archive 8th Edition, pp. 120 and 157",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    },
    "wap-children-of-ulric": {
      "name": "Werewolves",
      "comparedTo": "Children of Ulric in WAP Cult of Ulric.",
      "points": "15 points per model",
      "unitSize": "3+",
      "troopType": "War Beast",
      "profiles": [
        {
          "name": "Werewolf",
          "stats": { "M": "9", "WS": "4", "BS": "0", "S": "4", "T": "4", "W": "1", "I": "5", "A": "2", "Ld": "8" }
        },
        {
          "name": "Werewolf Alpha",
          "stats": { "M": "9", "WS": "4", "BS": "0", "S": "4", "T": "4", "W": "1", "I": "5", "A": "3", "Ld": "8" }
        }
      ],
      "equipment": ["Claws"],
      "specialRules": ["Crush the Weak", "Fear", "Frenzy", "Regeneration (5+)"],
      "options": [
        { "name": "Upgrade one Werewolf to a Werewolf Alpha", "cost": "+10 points" }
      ],
      "notes": [],
      "source": "Warhammer — Cult of Ulric, Discord Archive 8th Edition, pp. 41 and 58",
      "status": "campaign",
      "statusLabel": "Laughing Masses unit"
    }
  }
};
