/*
 * LUMERA — Product catalogue data
 * --------------------------------
 * Edit this file to add, remove or change products.
 * Each product renders automatically on products.html and product.html.
 *
 * Tip: replace `image: null` with a path to your own photography,
 * e.g. image: "assets/img/products/aria-64.jpg"
 */

window.LUMERA_CATEGORIES = [
  { id: "windows",     label: "Windows" },
  { id: "doors",       label: "Doors" },
  { id: "facades",     label: "Façades & Structures" },
  { id: "sunrooms",    label: "Sunrooms" }
];

window.LUMERA_PRODUCTS = [
  /* ---------------------------- WINDOWS ---------------------------- */
  {
    id: "aria-64-passive",
    code: "LM-W64P",
    series: "Aria",
    name: "Aria Passive Tilt & Turn Window",
    category: "windows",
    type: "Tilt & Turn Window",
    tagline: "Passive-house grade insulation in a refined aluminium frame.",
    summary:
      "Engineered for the most demanding low-energy buildings. A 64 mm thermal break and triple glazing deliver class-leading warmth and quiet, while the dual-action tilt-and-turn sash gives you secure ventilation and effortless cleaning.",
    highlights: [
      "64 mm thermal break for passive-house performance",
      "Triple glazing (5+20A+5+20A+5)",
      "Dual-action tilt & turn operation",
      "ROTO concealed hardware"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Thermal break": "64 mm",
      "Standard glass": "5+20A+5+20A+5",
      "Hardware": "ROTO"
    },
    performance: {
      "Air leakage": "1.0 ≥ q₁ > 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 0.78 W/m²·K"
    },
    openings: ["Fixed", "Side-hung", "Tilt & turn", "Double casement"],
    image: null
  },
  {
    id: "terra-clad-100",
    code: "LM-WT100",
    series: "Linnea",
    name: "Linnea Aluminium-Clad Timber Window",
    category: "windows",
    type: "Aluminium-Clad Timber Window",
    tagline: "Warm timber inside, weatherproof aluminium outside.",
    summary:
      "The natural warmth of solid timber on the interior, protected by a maintenance-free aluminium shell on the exterior. A five-stage paint process and slim visible frame make it a designer's favourite for premium residences.",
    highlights: [
      "Solid timber interior, aluminium exterior shell",
      "3-base + 2-finish coat painting process",
      "24 mm visible timber frame indoors",
      "Double-cavity glazing"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Painting process": "3 base + 2 finish coats",
      "Visible timber frame (indoor)": "24 mm",
      "Visible aluminium frame (outdoor)": "65 mm",
      "Standard glass": "5+12A+5+12A+5",
      "Hardware": "ROTO"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 45 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 1.5 W/m²·K"
    },
    openings: ["Fixed", "Side-hung", "Tilt & turn", "Double casement"],
    image: null
  },
  {
    id: "aria-44",
    code: "LM-W44",
    series: "Vela",
    name: "Vela Tilt & Turn Window",
    category: "windows",
    type: "Tilt & Turn Window",
    tagline: "Slim sightlines with SIEGENIA precision engineering.",
    summary:
      "A versatile system window with a narrow 27/15 mm interior sightline that maximises daylight. SIEGENIA hardware ensures a smooth, durable tilt-and-turn action across a wide range of sizes.",
    highlights: [
      "Ultra-slim 27/15 mm interior sightline",
      "SIEGENIA premium hardware",
      "C44 / CU44 / CT44 thermal break options",
      "Optimised daylight area"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Thermal break": "C44, CU44, CT44",
      "Visible frame (indoor)": "27 / 15 mm",
      "Visible frame (outdoor)": "48.9 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "SIEGENIA"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 4500 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 1.2 W/m²·K"
    },
    openings: ["Fixed", "Side-hung", "Tilt & turn", "Double casement"],
    image: null
  },
  {
    id: "terra-copper-88",
    code: "LM-WC88",
    series: "Auric",
    name: "Auric Copper-Clad Timber Window",
    category: "windows",
    type: "Copper-Clad Timber Window",
    tagline: "Heritage copper cladding for landmark architecture.",
    summary:
      "A statement window pairing solid timber with a copper-alloy exterior that develops a living patina over time. Built for prestige homes and listed buildings where character matters as much as performance.",
    highlights: [
      "Copper-alloy exterior cladding",
      "Living patina finish",
      "Solid timber interior",
      "ROTO + HOPPE hardware"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Profile no.": "H59-1",
      "Visible timber frame (indoor)": "43 mm",
      "Visible aluminium frame (outdoor)": "81 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "ROTO + HOPPE"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 45 dB",
      "Structural test pressure": "≤ 4500 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 1.5 W/m²·K"
    },
    openings: ["Fixed", "Side-hung", "Tilt & turn", "Double casement"],
    image: null
  },
  {
    id: "aura-awning-150",
    code: "LM-WA150",
    series: "Brisa",
    name: "Brisa Awning Window",
    category: "windows",
    type: "Awning Window",
    tagline: "Top-hung ventilation that stays open in the rain.",
    summary:
      "A top-hung awning window that lets fresh air in while keeping rain out — ideal for bathrooms, kitchens and coastal homes. A thermal-break frame keeps energy bills down year round.",
    highlights: [
      "Top-hung, rain-tolerant ventilation",
      "Multiple thermal break options",
      "26 mm visible interior frame",
      "Coastal-grade weather sealing"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Thermal break": "C24, C024, C30, HKT30",
      "Visible frame (indoor)": "26 mm",
      "Visible frame (outdoor)": "48.9 mm",
      "Standard glass": "5+20A+5"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 2.1 W/m²·K"
    },
    openings: ["Fixed", "Top-hung awning", "Double casement"],
    image: null
  },
  {
    id: "aria-outswing-111",
    code: "LM-WO111",
    series: "Levant",
    name: "Levant Outswing Window",
    category: "windows",
    type: "Outswing Casement Window",
    tagline: "Outward-opening casement with a panoramic feel.",
    summary:
      "An outward-opening casement that frees up interior space and delivers expansive views. A wide choice of thermal breaks lets you tune performance to any climate.",
    highlights: [
      "Outward-opening, space-saving sash",
      "Five thermal break options",
      "29 mm visible interior frame",
      "OAOSM + HOOP hardware"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Thermal break": "C18.6, IT18.6, C20, CU24, C24",
      "Visible frame (indoor)": "29 mm",
      "Visible frame (outdoor)": "51.9 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "OAOSM + HOOP"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 4500 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 2.3 W/m²·K"
    },
    openings: ["Fixed", "Outswing", "Tilt & turn", "Double casement"],
    image: null
  },
  {
    id: "aria-42",
    code: "LM-W42",
    series: "Cielo",
    name: "Cielo Tilt & Turn Window",
    category: "windows",
    type: "Tilt & Turn Window",
    tagline: "NFRC-rated comfort for the North American market.",
    summary:
      "A refined tilt-and-turn system tested to NFRC standards, combining ROTO + HOPPE hardware with a clean 31/18 mm sightline. A dependable all-rounder for high-end residential projects.",
    highlights: [
      "NFRC-rated thermal performance",
      "ROTO + HOPPE hardware",
      "31/18 mm interior sightline",
      "YT41 / YT-C42 thermal break"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Thermal break": "YT41, YT-C42",
      "Visible frame (indoor)": "31 / 18 mm",
      "Visible frame (outdoor)": "53 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "ROTO + HOPPE"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 4500 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 0.2 Btu/hr·ft²·°F (NFRC)"
    },
    openings: ["Fixed", "Side-hung", "Tilt & turn", "Double casement"],
    image: null
  },
  {
    id: "vista-six-track-150",
    code: "LM-WS150",
    series: "Marea",
    name: "Marea Six-Track Sliding Window",
    category: "windows",
    type: "Sliding Window",
    tagline: "Wide, uninterrupted glass that slides away.",
    summary:
      "A six-track sliding window built for large openings, letting you frame the view with broad panes of glass. Generous sash sizes and smooth LUMERA running gear make it a centrepiece for open-plan living.",
    highlights: [
      "Six-track system for large openings",
      "Sash up to 2000 mm wide",
      "LUMERA running hardware",
      "C12 / I10 thermal break"
    ],
    specs: {
      "Profile thickness": "1.4 – 2.0 mm",
      "Thermal break": "C12, I10",
      "Sash height": "400 – 1500 mm",
      "Sash width": "500 – 2000 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "LUMERA"
    },
    performance: {
      "Air leakage": "2.0 ≥ q₁ > 1.5 m³/(m·h)",
      "Sound (STC)": "≤ 30 dB",
      "Structural test pressure": "≤ 4500 Pa",
      "Water penetration": "≤ 600 Pa",
      "U-factor": "≥ 3.0 W/m²·K"
    },
    openings: ["Fixed", "Sliding"],
    image: null
  },
  {
    id: "lumen-skylight",
    code: "LM-WSK",
    series: "Lumen",
    name: "Lumen Electric Roof Skylight",
    category: "windows",
    type: "Electric Skylight",
    tagline: "Bring the sky indoors, at the touch of a button.",
    summary:
      "A motorised roof skylight that opens with a quiet chain drive, venting hot air and flooding interiors with daylight. Customisable shapes suit lofts, stairwells and architectural rooflines.",
    highlights: [
      "Chain-motor electric opening",
      "Customisable irregular shapes",
      "Laminated safety glazing",
      "Loft and stairwell ready"
    ],
    specs: {
      "T-profile thickness": "3.0 mm",
      "Frame size": "105 mm × 200 mm",
      "Opening": "Chain motor",
      "Size range": "W 400–1500 mm × H 1000–1500 mm",
      "Window shape": "Customisable irregular shapes",
      "Standard glass": "5+0.76PVB+5+12A+5"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 35 dB",
      "Structural test pressure": "≤ 4500 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 3.0 W/m²·K"
    },
    openings: ["Electric chain motor"],
    image: null
  },

  /* ----------------------------- DOORS ----------------------------- */
  {
    id: "terra-slide-140",
    code: "LM-DT140",
    series: "Verano",
    name: "Verano Aluminium-Clad Timber Sliding Door",
    category: "doors",
    type: "Sliding Door",
    tagline: "A wall of timber-warm glass that glides open.",
    summary:
      "An aluminium-clad timber sliding door that dissolves the line between inside and out. Warm timber faces the room while a weatherproof aluminium skin faces the elements — ROTO hardware keeps large panels gliding effortlessly.",
    highlights: [
      "Aluminium-clad timber construction",
      "40 mm slim visible frame",
      "ROTO sliding hardware",
      "Indoor–outdoor living"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Painting process": "3 base + 2 finish coats",
      "Visible timber frame (indoor)": "40 mm",
      "Visible aluminium frame (outdoor)": "40 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "ROTO"
    },
    performance: {
      "Air leakage": "1.5 ≥ q₁ > 1.0 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 600 Pa",
      "U-factor": "≥ 2.3 W/m²·K"
    },
    openings: ["Sliding (left / right)"],
    image: null
  },
  {
    id: "aegis-system-door",
    code: "LM-DA",
    series: "Aegis",
    name: "Aegis Armoured Entry Door",
    category: "doors",
    type: "Armoured Entry Door",
    tagline: "Security and craftsmanship for the grand entrance.",
    summary:
      "A thermal-break armoured entry door that makes a statement and keeps your home safe. Fine 6 mm relief craftsmanship, a 180° opening and a multi-function smart lock combine presence with peace of mind.",
    highlights: [
      "Thermal-break armoured construction",
      "6 mm fine relief craftsmanship",
      "180° opening angle",
      "Multi-function smart lock"
    ],
    specs: {
      "Product structure": "Thermal break",
      "Design process": "6 mm fine relief craftsmanship",
      "Opening angle": "180°",
      "Lock": "Multi-function smart lock"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 45 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 2.3 W/m²·K"
    },
    openings: ["Double-leaf swing"],
    image: null
  },
  {
    id: "vista-electric-136",
    code: "LM-DE136",
    series: "Glide",
    name: "Glide Electric Sliding Door",
    category: "doors",
    type: "Electric Sliding Door",
    tagline: "Floor-to-ceiling glass that opens on its own.",
    summary:
      "A narrow-frame electric sliding door for monumental openings up to 6 metres wide. Whisper-quiet automation and minimal sightlines turn an entire wall into moving glass.",
    highlights: [
      "Sash up to 6000 mm wide",
      "Automated electric operation",
      "Narrow 20 mm sightline",
      "BAOGAO + EVECCA hardware"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Thermal break": "C22, I14.8",
      "Sash height": "1500 – 4500 mm",
      "Sash width": "900 – 6000 mm",
      "Standard glass": "5+24A+5",
      "Hardware": "BAOGAO, EVECCA"
    },
    performance: {
      "Air leakage": "2.0 ≥ q₁ > 1.5 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 500 Pa",
      "U-factor": "≥ 3.0 W/m²·K"
    },
    openings: ["Fixed", "Electric sliding"],
    image: null
  },
  {
    id: "vista-tri-track-189",
    code: "LM-DS189",
    series: "Traverse",
    name: "Traverse Three-Track Sliding Door",
    category: "doors",
    type: "Sliding Door",
    tagline: "Three tracks, full-width opening, all-season comfort.",
    summary:
      "A thermal-break three-track sliding door that stacks panels neatly aside to open up an entire wall. A robust profile and ROTO hardware handle tall sashes with ease.",
    highlights: [
      "Three-track stacking system",
      "Sash up to 3000 mm tall",
      "Heavy-duty thermal break profile",
      "ROTO hardware"
    ],
    specs: {
      "Profile thickness": "1.8 – 3.0 mm",
      "Thermal break": "C25, C14.8, I10",
      "Sash height": "≤ 3000 mm",
      "Sash width": "≤ 2000 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "ROTO"
    },
    performance: {
      "Air leakage": "1.5 ≥ q₁ > 1.0 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 600 Pa",
      "U-factor": "≥ 2.3 W/m²·K"
    },
    openings: ["Fixed", "Sliding (left / right)"],
    image: null
  },
  {
    id: "aria-hinged-72",
    code: "LM-DH72",
    series: "Soren",
    name: "Soren Hinged Door",
    category: "doors",
    type: "Hinged Door",
    tagline: "A single hinged door with a wide configuration range.",
    summary:
      "A thermal-break single hinged door that opens inward or outward across a generous size range. A 35.3 mm thermal break and ROTO hardware deliver dependable comfort and security at the threshold.",
    highlights: [
      "Inward or outward opening",
      "35.3 mm thermal break",
      "Sash up to 2400 mm tall",
      "ROTO hardware"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Thermal break": "35.3 mm",
      "Sash height": "≤ 2400 mm",
      "Outward width": "515 – 900 mm",
      "Inward width": "370 – 1300 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "ROTO"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 2.3 W/m²·K"
    },
    openings: ["Fixed", "Inward swing", "Outward swing", "Double casement"],
    image: null
  },
  {
    id: "aria-swing-70",
    code: "LM-DW70",
    series: "Arco",
    name: "Arco Swing Door",
    category: "doors",
    type: "Swing Door",
    tagline: "Versatile swing door with multiple opening modes.",
    summary:
      "A thermal-break swing door offering side-hung, tilt-and-turn and double-casement configurations. STANDARD + HOPPE hardware and a wide thermal-break choice make it adaptable to almost any opening.",
    highlights: [
      "Five thermal break options",
      "Multiple opening modes",
      "57 mm exterior sightline",
      "STANDARD + HOPPE hardware"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Thermal break": "CT24 / I24 / I20 / C24 / C35.3",
      "Visible frame (indoor)": "35 mm",
      "Visible frame (outdoor)": "57 mm",
      "Standard glass": "5+20A+5",
      "Hardware": "STANDARD + HOPPE"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 45 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 2.1 W/m²·K"
    },
    openings: ["Fixed", "Side-hung", "Tilt & turn", "Double casement"],
    image: null
  },

  /* ----------------------- FAÇADES & STRUCTURES ----------------------- */
  {
    id: "halo-curtain-wall-170",
    code: "LM-FC170",
    series: "Halo",
    name: "Halo Curtain Wall System",
    category: "facades",
    type: "Curtain Wall",
    tagline: "A glass façade with barely-there sightlines.",
    summary:
      "A narrow-frame curtain wall system for full-height glazed façades. Just 20 mm of visible frame indoors lets architecture read as pure glass, with the structural strength to span large elevations.",
    highlights: [
      "20 mm visible interior frame",
      "Full-height façade glazing",
      "3.0 mm structural profile",
      "ROTO / HOPPE / SIEGENIA hardware"
    ],
    specs: {
      "Profile thickness": "3.0 mm",
      "Thermal break": "CT24, I24, CU24, C24, CO24",
      "Visible frame (indoor)": "20 mm",
      "Visible frame (outdoor)": "39.3 mm",
      "Standard glass": "6+20A+6",
      "Hardware": "ROTO, HOPPE, SIEGENIA"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 40 dB",
      "Structural test pressure": "≤ 5000 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 2.1 W/m²·K"
    },
    openings: ["Fixed", "Concealed vent", "Top-hung"],
    image: null
  },
  {
    id: "lumen-heavy-skylight",
    code: "LM-FSK",
    series: "Eos",
    name: "Eos Electric Sliding Skylight",
    category: "facades",
    type: "Structural Skylight",
    tagline: "An entire roof that slides open above you.",
    summary:
      "A heavy-duty electric sliding skylight with a concealed motor and seamless 45° welded corners. Engineered for spans up to 4 metres, it opens whole sections of roof to the sky over courtyards and atria.",
    highlights: [
      "Concealed-motor electric sliding",
      "Spans up to 4000 mm wide",
      "45° seamless welded corners",
      "Laminated insulated glazing"
    ],
    specs: {
      "T-profile thickness": "3.0 mm",
      "Frame size": "97 mm × 200 mm",
      "Opening": "Electric sliding",
      "Size range": "W 1000–4000 mm × H 1500–3500 mm",
      "Feature": "45° seamless welded frame & sash",
      "Standard glass": "5+0.76PVB+5+12A+5"
    },
    performance: {
      "Air leakage": "1.0 ≥ q₁ > 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 35 dB",
      "Structural test pressure": "≤ 4500 Pa",
      "Water penetration": "≤ 600 Pa",
      "U-factor": "≥ 3.0 W/m²·K"
    },
    openings: ["Fixed", "Electric sliding"],
    image: null
  },

  /* ---------------------------- SUNROOMS ---------------------------- */
  {
    id: "atrio-sunroom-150",
    code: "LM-SR150",
    series: "Atrio",
    name: "Atrio Sunroom System",
    category: "sunrooms",
    type: "Sunroom System",
    tagline: "A light-filled room that lives between house and garden.",
    summary:
      "A complete sunroom system in 6063-T5 aluminium alloy, with a choice of manual, electric or sliding skylight roofs. Laminated and insulated glazing options let you build a year-round room flooded with daylight.",
    highlights: [
      "6063-T5 aluminium alloy structure",
      "Manual / electric / sliding skylight roofs",
      "Laminated & insulated glass options",
      "Year-round comfort"
    ],
    specs: {
      "Profile thickness": "3.0 – 4.5 mm",
      "Material": "Aluminium alloy 6063-T5",
      "Roof options": "Manual / electric / sliding skylight",
      "Standard glass": "5+0.7PVB+5 / 6+1.14PVB+6 / 5+0.76PVB+5+12A+5"
    },
    performance: {
      "Air leakage": "q₁ ≤ 0.5 m³/(m·h)",
      "Sound (STC)": "≤ 35 dB",
      "Structural test pressure": "≤ 4500 Pa",
      "Water penetration": "≤ 700 Pa",
      "U-factor": "≥ 3.0 W/m²·K"
    },
    openings: ["Flat roof", "Gable roof", "Lean-to", "Curved roof"],
    image: null
  }
];
