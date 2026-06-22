/*
 * LUMERA — Product catalogue data
 * Reworked from the source product catalogue: complete features,
 * parameters, recommended sizes and a frame cross-section ("cut") per system.
 * All sourcing/brand references removed; genuine European hardware kept.
 */

window.LUMERA_CATEGORIES = [
  { id: "windows",     label: "Windows" },
  { id: "doors",       label: "Doors" },
  { id: "facades",     label: "Façades & Curtain Wall" },
  { id: "sunrooms",    label: "Sunrooms" }
];

var CUT = "assets/img/cuts/";

window.LUMERA_PRODUCTS = [
  /* ---------------------------- WINDOWS ---------------------------- */
  {
    id: "marea-128", code: "128", series: "Marea", name: "Marea Six-Track Sliding Window",
    category: "windows", type: "Sliding Window",
    tagline: "A wall of glass that slides away on six stainless tracks.",
    summary: "A heavy-duty multi-track sliding window built for large openings. Six stainless-steel tracks and a dual-wheel system carry broad sashes smoothly, while an integrated screen, concealed stepped drainage and triple silicone sealing keep weather and insects out.",
    highlights: [
      "Triple-track with screen system (inner / outer options)",
      "Frame-embedded sash with concealed stepped drainage",
      "Multi-point silicone brush seals — triple sealing",
      "6 stainless-steel tracks + dual-wheel running gear"
    ],
    specs: {
      "Profile thickness": "1.4 – 1.6 mm",
      "Standard glass": "5 + 14A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "3-track / 3-sash, 3-track / 6-sash with screen",
      "Hardware": "LUMERA engineered"
    },
    performance: {},
    openings: ["3-track / 3-sash + screen", "3-track / 6-sash + screen"],
    cut: CUT + "marea-128.jpg", image: null
  },
  {
    id: "aria-78", code: "78", series: "Aria", name: "Aria Multi-Mode Window",
    category: "windows", type: "Tilt & Turn Window",
    tagline: "One window, four ways to open it.",
    summary: "A versatile aluminium system window offering outswing, inswing, awning and tilt-and-turn from a single platform. Glue-injected corners, triple sealing and pressure-equalising drainage make it watertight and quiet in any climate.",
    highlights: [
      "Corner assembly with glue-injection technology",
      "Triple sealing design",
      "Pressure-equalising holes + concealed drainage",
      "Square closed-cavity pressure strips"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Outswing / inswing / awning / tilt & turn",
      "Hardware": "ROTO / HOPPE / VBH"
    },
    performance: {},
    openings: ["Outswing", "Inswing", "Awning", "Tilt & turn"],
    cut: CUT + "aria-78.jpg", image: null
  },
  {
    id: "vela-ca100", code: "CA100", series: "Vela", name: "Vela Casement Window",
    category: "windows", type: "Casement Window",
    tagline: "Panoramic glass with quiet micro-ventilation.",
    summary: "A multi-chamber thermal-break casement that frames the view and breathes through a discreet micro-ventilation setting. An integrated screen and precision glue-injected corners deliver excellent air and water tightness.",
    highlights: [
      "Multi-chamber thermal-break aluminium",
      "Integrated window + screen design",
      "Precision glue-injected corner assembly",
      "Triple sealing + panoramic view with micro-ventilation"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Inswing",
      "Hardware": "LUMERA engineered + knob handle"
    },
    performance: {},
    openings: ["Inswing"],
    cut: CUT + "vela-ca100.jpg", image: null
  },
  {
    id: "cielo-md100", code: "MD100", series: "Cielo", name: "Cielo Ultra-Slim Window",
    category: "windows", type: "Tilt & Turn Window",
    tagline: "Ultra-slim frame, 42 dB of calm.",
    summary: "An ultra-slim system window engineered for acoustic comfort — a triple weather-seal system delivers 42 dB of sound reduction (EN ISO 10140-2). Structural corner reinforcement and a pressure-equalised drainage system clear water 30% faster than conventional designs.",
    highlights: [
      "Ultra-slim frame design",
      "Structural corner reinforcement for wind load",
      "Triple weather-seal — 42 dB (EN ISO 10140-2)",
      "Pressure-equalised drainage, 30% faster evacuation"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Finish": "Fluorocarbon coating",
      "Opening": "Inswing / tilt & turn",
      "Hardware": "ROTO"
    },
    performance: { "Sound reduction": "42 dB (EN ISO 10140-2)" },
    openings: ["Inswing", "Tilt & turn"],
    cut: CUT + "cielo-md100.png", image: null
  },
  {
    id: "lumen-m111pro", code: "M111Pro", series: "Lumen", name: "Lumen Integrated-Screen Window",
    category: "windows", type: "Tilt & Turn Window",
    tagline: "A built-in screen that's child-safe by design.",
    summary: "A flush-frame system window with a fully integrated screen, dual-protection screen frame and optional child-proof locking. Seamless frame-to-sash alignment and a ground-level drainage system keep it clean-lined and dependable.",
    highlights: [
      "Integrated window & screen system",
      "Dual-protection screen frame (zinc-alloy corners, silicone edges)",
      "Optional guard rails / child-proof locking",
      "Flush frame + advanced ground-level drainage"
    ],
    specs: {
      "Profile thickness": "1.8 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Inswing / tilt & turn",
      "Hardware": "LUMERA engineered"
    },
    performance: {},
    openings: ["Inswing", "Tilt & turn"],
    cut: CUT + "lumen-m111pro.jpg", image: null
  },
  {
    id: "brisa-ma82", code: "MA82", series: "Brisa", name: "Brisa Tilt & Turn Window",
    category: "windows", type: "Tilt & Turn Window",
    tagline: "Dual inward-opening with a screen built in.",
    summary: "A tilt-and-turn window with an integrated screen and dual inward-opening action. Glue-injected corner reinforcement and a triple-layer sealing system give excellent air and water tightness with reliable wind-load resistance.",
    highlights: [
      "Integrated window & screen, dual inward-opening",
      "Corner reinforced with glue-injection technology",
      "Triple-layer sealing system",
      "Pressure-equalising & concealed drainage"
    ],
    specs: {
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Inswing / tilt & turn",
      "Hardware": "ROTO / HOPPE"
    },
    performance: {},
    openings: ["Inswing", "Tilt & turn"],
    cut: CUT + "brisa-ma82.png", image: null
  },
  {
    id: "levant-r85", code: "R85", series: "Levant", name: "Levant Crank-Out Window",
    category: "windows", type: "Crank-Out Window",
    tagline: "Crank-out ventilation with an integrated screen.",
    summary: "A flexible crank-out window with reinforced corner construction and a triple sealing system with concealed drainage. Multiple opening modes adapt it to any elevation while blocking rain and external noise.",
    highlights: [
      "Integrated window & screen design",
      "Reinforced corner construction",
      "Triple sealing with concealed drainage",
      "Multiple opening options"
    ],
    specs: {
      "Profile thickness": "1.6 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Outswing / inswing / tilt & turn",
      "Hardware": "ROTO"
    },
    performance: {},
    openings: ["Outswing", "Inswing", "Tilt & turn"],
    cut: CUT + "levant-r85.jpg", image: null
  },
  {
    id: "auric-y88", code: "Y88", series: "Auric", name: "Auric Copper-Clad Timber Window",
    category: "windows", type: "Copper-Clad Timber Window",
    tagline: "A copper-and-timber window for landmark homes.",
    summary: "A copper-wood hybrid window that pairs solid timber with a seamlessly welded copper-alloy exterior that ages into a living patina. Triple weather-stripping, concealed drainage and a German Remmers paint system protect it for decades.",
    highlights: [
      "Copper-wood hybrid structure",
      "Triple weather-stripping + concealed drainage",
      "German Remmers paint system",
      "Seamless, gap-free copper corner welding"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Copper alloy + timber",
      "Base colour": "Copper",
      "Opening": "Inswing / tilt & turn",
      "Hardware": "ROTO"
    },
    performance: {},
    openings: ["Inswing", "Tilt & turn"],
    cut: CUT + "auric-y88.jpg", image: null
  },
  {
    id: "linnea-y78", code: "Y78", series: "Linnea", name: "Linnea Aluminium-Clad Timber Window",
    category: "windows", type: "Aluminium-Clad Timber Window",
    tagline: "Warm timber inside, welded aluminium outside.",
    summary: "Solid timber on the interior, finished with German Remmers paint, protected by a seamlessly welded aluminium shell with rounded edges on the exterior. German ROTO hardware ensures a smooth, durable action.",
    highlights: [
      "Timber finished with German Remmers paint",
      "Seamless welded aluminium corners, rounded edges",
      "Aluminium exterior, timber interior",
      "German ROTO hardware"
    ],
    specs: {
      "Profile thickness": "1.6 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5 + timber",
      "Opening": "Inswing / tilt & turn",
      "Hardware": "ROTO"
    },
    performance: {},
    openings: ["Inswing", "Tilt & turn"],
    cut: CUT + "linnea-y78.jpg", image: null
  },

  /* ----------------------------- DOORS ----------------------------- */
  {
    id: "verano-182-70", code: "182-70", series: "Verano", name: "Verano Sliding Door",
    category: "doors", type: "Sliding Door",
    tagline: "A high-security sliding door for full-height openings.",
    summary: "A frame-encased sliding door with a high-security multi-point locking system and enhanced anti-forcing design. A 70 mm frame and three-track running gear with screen handle tall, wide sashes with ease.",
    highlights: [
      "Frame-encased sash design",
      "High-security multi-point locking",
      "Enhanced anti-forcing resistance",
      "3-track sliding with integrated screen"
    ],
    specs: {
      "Profile thickness": "1.6 – 3.0 mm",
      "Frame depth": "70 mm",
      "Standard glass": "5 + 14A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "3-track sliding with screen",
      "Hardware": "LUMERA engineered + lock",
      "Recommended size": "Single sash W 650–2000 mm × H 2000–3000 mm"
    },
    performance: {},
    openings: ["3-track sliding + screen"],
    cut: CUT + "verano-182-70.png", image: null
  },
  {
    id: "glide-t125", code: "T125", series: "Glide", name: "Glide Slim Sliding Door",
    category: "doors", type: "Sliding Door",
    tagline: "Slim frames, big glass, 3000 Pa of wind resistance.",
    summary: "A slim-frame sliding door that maximises glass area while resisting wind pressure up to 3000 Pa. A frame-encased sash with multi-sealing and a high-track concealed drainage system keep it weather-tight.",
    highlights: [
      "Enhanced thermal insulation",
      "Frame-encased sash with multi-sealing system",
      "Slim frame for a larger glass area",
      "High-track with concealed drainage"
    ],
    specs: {
      "Profile thickness": "1.8 – 2.5 mm",
      "Standard glass": "5 + 14A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "2-track sliding",
      "Hardware": "ROTO",
      "Recommended size": "Single sash W 650–2000 mm × H 2000–3000 mm"
    },
    performance: { "Wind pressure resistance": "up to 3000 Pa" },
    openings: ["2-track sliding"],
    cut: CUT + "glide-t125.png", image: null
  },
  {
    id: "arco-45-06", code: "45-06", series: "Arco", name: "Arco Slim Pivot Door",
    category: "doors", type: "Pivot / Casement Door",
    tagline: "An invisible-pivot glass door for interior drama.",
    summary: "A slim-frame interior pivot door with a top-and-bottom invisible hinge system, silent operation and a smooth 90° swing. A safe recessed latch keeps the line clean; finishes carry a 30-year fade resistance.",
    highlights: [
      "30-year fade resistance",
      "Customisable glass options",
      "Top & bottom invisible pivot hinges, silent 90° swing",
      "Safe recessed latch (no protrusions)"
    ],
    specs: {
      "Profile thickness": "3.0 mm",
      "Frame depth": "45 mm",
      "Standard glass": "8 mm tempered",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Pivot / swing",
      "Hardware": "LUMERA engineered + magnetic lock",
      "Recommended size": "W 600–1100 mm × H 1800–2600 mm",
      "Best for": "Bathroom, kitchen, study"
    },
    performance: {},
    openings: ["Pivot / swing"],
    cut: CUT + "arco-45-06.jpg", image: null
  },
  {
    id: "soren-45-08", code: "45-08", series: "Soren", name: "Soren Slim Pivot Door",
    category: "doors", type: "Pivot / Casement Door",
    tagline: "The wider-profile sibling of the Arco pivot door.",
    summary: "A slim-frame interior pivot door with a heavier 4.0 mm profile for larger leaves — invisible top-and-bottom pivot hinges, silent 90° operation and a safe recessed latch, with a 30-year fade-resistant finish.",
    highlights: [
      "30-year fade resistance",
      "Customisable glass options",
      "Top & bottom invisible pivot hinges, silent 90° swing",
      "Safe recessed latch (no protrusions)"
    ],
    specs: {
      "Profile thickness": "4.0 mm",
      "Frame depth": "45 mm",
      "Standard glass": "8 mm tempered",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Pivot / swing",
      "Hardware": "LUMERA engineered + magnetic lock",
      "Recommended size": "W 600–1100 mm × H 1800–2600 mm",
      "Best for": "Bathroom, kitchen, study"
    },
    performance: {},
    openings: ["Pivot / swing"],
    cut: CUT + "soren-45-08.jpg", image: null
  },
  {
    id: "terra-96", code: "96", series: "Terra", name: "Terra Aluminium-Clad Timber Door",
    category: "doors", type: "Aluminium-Clad Timber Door",
    tagline: "A clad-timber door with a German-painted heart.",
    summary: "An aluminium-clad timber door with an integrated screen and dual inward-opening. A German Remmers paint system (3-layer primer + 2-layer topcoat) and precision radius-corner aluminium welding make it durable and refined.",
    highlights: [
      "Integrated window & screen, dual inward-opening",
      "German Remmers paint: 3-layer primer + 2-layer topcoat",
      "Triple sealing + hidden drainage",
      "Precision radius-corner aluminium welding"
    ],
    specs: {
      "Profile thickness": "1.6 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5 + timber",
      "Opening": "Inswing / tilt & turn",
      "Hardware": "ROTO"
    },
    performance: {},
    openings: ["Inswing", "Tilt & turn"],
    cut: CUT + "terra-96.jpg", image: null
  },
  {
    id: "solis-y200", code: "Y200", series: "Solis", name: "Solis Clad-Timber Sliding Door",
    category: "doors", type: "Aluminium-Clad Timber Sliding Door",
    tagline: "Dual-colour clad-timber that glides aside.",
    summary: "A thermal-optimised, dual-colour aluminium-clad timber sliding door — timber-warm inside, aluminium outside. A German Remmers paint system and seamless aluminium corner technology keep it beautiful for decades.",
    highlights: [
      "Thermal-optimised dual-colour design",
      "German Remmers paint protection",
      "Seamless aluminium corner technology",
      "Timber interior, aluminium exterior"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5 + timber",
      "Opening": "3-track sliding with screen",
      "Hardware": "ROTO"
    },
    performance: {},
    openings: ["3-track sliding + screen"],
    cut: CUT + "solis-y200.jpg", image: null
  },
  {
    id: "aegis-r72", code: "R72", series: "Aegis", name: "Aegis Multi-Function Glass Door",
    category: "doors", type: "Casement Door",
    tagline: "Outward, inward or tilt — a door for terraces.",
    summary: "An aluminium glass casement door with structural corner reinforcement and wind-load resistance up to 3000 Pa. German ROTO heavy-duty hinges and a multi-function action (outward swing / inward swing / tilt-turn) make it ideal for terraces and sunrooms.",
    highlights: [
      "Structural corner reinforcement, wind load to 3000 Pa",
      "German ROTO heavy-duty hinge system",
      "Multi-function: outward / inward swing / tilt-turn",
      "Extended hardware lifespan"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Standard glass": "5 + 20A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Outward / inward swing / tilt-turn",
      "Hardware": "ROTO",
      "Recommended size": "W 700–1000 mm × H 1800–2800 mm",
      "Best for": "Terraces, sunrooms, outdoor spaces"
    },
    performance: { "Wind load resistance": "up to 3000 Pa" },
    openings: ["Outward swing", "Inward swing", "Tilt-turn"],
    cut: CUT + "aegis-r72.png", image: null
  },
  {
    id: "atlas-136", code: "136", series: "Atlas", name: "Atlas Lift & Slide Door",
    category: "doors", type: "Lift & Sliding Door",
    tagline: "Up to six metres of door that lifts and glides.",
    summary: "An extra-large lift-and-slide door system for monumental openings, with reinforced wind resistance and a choice of hardware. Two- and three-track configurations span openings up to 6 metres wide.",
    highlights: [
      "Extra-large sliding door system",
      "Reinforced wind resistance",
      "2-track and 3-track configurations",
      "Multiple hardware options"
    ],
    specs: {
      "Profile thickness": "2.0 mm",
      "Standard glass": "5 + 24A + 5 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "2-track / 3-track sliding",
      "Hardware": "LUMERA engineered",
      "Recommended size": "W 900–6000 mm × H 1500–4500 mm",
      "Best for": "Balcony, kitchen, living spaces"
    },
    performance: {},
    openings: ["2-track sliding", "3-track sliding"],
    cut: CUT + "atlas-136.jpg", image: null
  },

  /* ----------------------- FAÇADES & CURTAIN WALL ----------------------- */
  {
    id: "halo-t170", code: "T170", series: "Halo", name: "Halo Curtain Wall System",
    category: "facades", type: "Curtain Wall",
    tagline: "A secure, ultra-slim glass façade with built-in light.",
    summary: "An ultra-slim curtain wall that meets security standards with glue-injected structural corners and integrated ambient lighting. Dual-inward opening casements, an optional glass guardrail and integrated stainless mosquito screens complete the system.",
    highlights: [
      "Ultra-slim secure design",
      "Glue-injected structural corner reinforcement",
      "Integrated ambient lighting",
      "Dual-inward casements, optional glass guardrail + stainless screens"
    ],
    specs: {
      "Profile thickness": "2.5 mm",
      "Standard glass": "6 + 20A + 6 tempered insulated",
      "Material": "Aluminium alloy 6063-T5",
      "Opening": "Manual push / electric push / tilt & turn",
      "Hardware": "ALPHA motor + German SIEGENIA"
    },
    performance: {},
    openings: ["Manual push", "Electric push", "Tilt & turn"],
    cut: CUT + "halo-t170.jpg", image: null
  },

  /* ---------------------------- SUNROOMS ---------------------------- */
  {
    id: "atrio-c130", code: "C130", series: "Atrio", name: "Atrio Sunroom System",
    category: "sunrooms", type: "Sunroom System",
    tagline: "A light-filled room engineered to carry the load.",
    summary: "A sunroom system built on precision corner-joint technology for a higher load-bearing capacity than standard joints, available in thermal-break or standard configurations to suit any climate.",
    highlights: [
      "Precision corner-joint technology",
      "Higher load-bearing capacity than standard joints",
      "Thermal-break or standard system options",
      "Engineered for year-round use"
    ],
    specs: {
      "Profile thickness": "2.8 mm",
      "Material": "Aluminium alloy 6063-T5",
      "System": "Thermal-break or standard"
    },
    performance: {},
    openings: ["Fixed", "Configurable roof"],
    cut: null, image: null
  }
];
