/*
 * LUMERA — photography
 * Real product renders, correlated to each product by type.
 * Files live in assets/img/products/ (served from the repo).
 */
var P = "assets/img/products/";

window.LUMERA_PHOTOS = {
  hero:     P + "hero-villa.jpg",
  // category cards + section imagery
  windows:  P + "window-tilt-turn.jpg",
  doors:    P + "door-timber.jpg",
  facades:  P + "facade-curtainwall.jpg",
  sunrooms: P + "sunroom.jpg",
  // extra keys for feature sections
  exterior: P + "exterior-villa.jpg",
  timber:   P + "window-timber.jpg"
};

// Each product mapped to the matching real render (by window/door type).
// Anything omitted falls back to its bespoke SVG illustration
// (e.g. the armoured entry door).
window.LUMERA_PRODUCT_PHOTOS = {
  // Windows
  "aria-64-passive":     P + "window-tilt-turn.jpg",
  "terra-clad-100":      P + "window-timber.jpg",
  "aria-44":             P + "window-casement.jpg",
  "terra-copper-88":     P + "window-timber.jpg",
  "aura-awning-150":     P + "window-casement.jpg",
  "aria-outswing-111":   P + "window-casement.jpg",
  "aria-42":             P + "window-tilt-turn.jpg",
  "vista-six-track-150": P + "window-sliding.jpg",
  "lumen-skylight":      P + "skylight.jpg",
  // Doors
  "terra-slide-140":     P + "door-timber.jpg",
  // aegis-system-door -> bespoke SVG (armoured door)
  "vista-electric-136":  P + "door-sliding.jpg",
  "vista-tri-track-189": P + "door-hinged.jpg",
  "aria-hinged-72":      P + "door-hinged.jpg",
  "aria-swing-70":       P + "door-sliding.jpg",
  // Façades & structures
  "halo-curtain-wall-170": P + "facade-curtainwall.jpg",
  "lumen-heavy-skylight":  P + "skylight.jpg",
  // Sunrooms
  "atrio-sunroom-150":   P + "sunroom.jpg"
};
