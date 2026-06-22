/*
 * LUMERA — photography
 * Each product has its OWN distinct image (no repetition):
 *   - 11 products use a verified photo extracted from the product catalogue
 *     (assets/img/products/*.jpg)
 *   - 7 products use a unique generated render hosted on a public CDN
 *     (gap-fill for products without a usable catalogue lifestyle photo)
 * None of the images carry any company name or branding.
 */
var P = "assets/img/products/";
var G = "https://d8j0ntlcm91z4.cloudfront.net/user_3CrvfYCEVOqUFdIswjOUJiEcZdE/";

window.LUMERA_PHOTOS = {
  hero:     P + "hero-villa.jpg",
  windows:  P + "window-tilt-turn.jpg",
  doors:    P + "door-timber.jpg",
  facades:  P + "facade-curtainwall.jpg",
  sunrooms: P + "sunroom.jpg",
  exterior: P + "exterior-villa.jpg",
  timber:   P + "window-timber.jpg"
};

// One distinct image per product.
window.LUMERA_PRODUCT_PHOTOS = {
  // Windows — catalogue
  "aria-64-passive":     P + "window-tilt-turn.jpg",
  "terra-clad-100":      P + "window-timber.jpg",
  "aria-44":             P + "window-casement.jpg",
  "aria-42":             P + "window-lake.jpg",
  "vista-six-track-150": P + "window-sliding.jpg",
  "lumen-skylight":      P + "skylight.jpg",
  // Windows — generated gap-fill
  "terra-copper-88":     G + "hf_20260621_235826_fcf0ce28-001d-4475-9ed6-1878abaf5ee9_min.webp",
  "aura-awning-150":     G + "hf_20260621_235824_2082b2fa-bab1-41b7-8ece-eff231af646d_min.webp",
  "aria-outswing-111":   G + "hf_20260621_235825_038a72b9-959a-476f-af8d-242a14dd59e7_min.webp",
  // Doors — catalogue
  "terra-slide-140":     P + "door-timber.jpg",
  "vista-electric-136":  P + "door-sliding.jpg",
  "vista-tri-track-189": P + "door-hinged.jpg",
  // Doors — generated gap-fill
  "aegis-system-door":   G + "hf_20260621_235828_efb1ef8a-8579-4a2a-bdb0-a5811571ecc7_min.webp",
  "aria-hinged-72":      G + "hf_20260621_235829_be8cd35f-631f-4f31-8d0d-95b402a49022_min.webp",
  "aria-swing-70":       G + "hf_20260621_235830_64be6e44-5eb1-407b-a111-8ba98ae29c9d_min.webp",
  // Façades & structures
  "halo-curtain-wall-170": P + "facade-curtainwall.jpg",
  "lumen-heavy-skylight":  G + "hf_20260621_235831_0a85317e-005e-45bd-9646-a37663940434_min.webp",
  // Sunrooms
  "atrio-sunroom-150":   P + "sunroom.jpg"
};
