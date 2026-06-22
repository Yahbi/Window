/*
 * LUMERA — photography
 * Card / hero lifestyle images per product (catalogue photos + generated
 * gap-fills). Each product also has its own technical cross-section ("cut")
 * defined in products.js and shown in the detail side panel.
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

window.LUMERA_PRODUCT_PHOTOS = {
  // Windows
  "marea-128":     P + "window-sliding.jpg",
  "aria-78":       P + "window-tilt-turn.jpg",
  "vela-ca100":    P + "window-casement.jpg",
  "cielo-md100":   P + "window-lake.jpg",
  "lumen-m111pro": G + "hf_20260621_235824_2082b2fa-bab1-41b7-8ece-eff231af646d_min.webp",
  "brisa-ma82":    P + "window-tilt-turn.jpg",
  "levant-r85":    G + "hf_20260621_235825_038a72b9-959a-476f-af8d-242a14dd59e7_min.webp",
  "auric-y88":     G + "hf_20260621_235826_fcf0ce28-001d-4475-9ed6-1878abaf5ee9_min.webp",
  "linnea-y78":    P + "window-timber.jpg",
  // Doors
  "verano-182-70": P + "door-sliding.jpg",
  "glide-t125":    P + "door-sliding.jpg",
  "arco-45-06":    G + "hf_20260621_235829_be8cd35f-631f-4f31-8d0d-95b402a49022_min.webp",
  "soren-45-08":   G + "hf_20260621_235830_64be6e44-5eb1-407b-a111-8ba98ae29c9d_min.webp",
  "terra-96":      P + "door-hinged.jpg",
  "solis-y200":    P + "door-timber.jpg",
  "aegis-r72":     G + "hf_20260621_235828_efb1ef8a-8579-4a2a-bdb0-a5811571ecc7_min.webp",
  "atlas-136":     P + "door-timber.jpg",
  // Façades & curtain wall
  "halo-t170":     P + "facade-curtainwall.jpg",
  // Sunrooms
  "atrio-c130":    P + "sunroom.jpg"
};
