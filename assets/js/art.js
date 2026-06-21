/*
 * LUMERA — Bespoke SVG art system
 * --------------------------------
 * Generates self-contained, luxurious architectural illustrations so the
 * site never depends on external images. Every product/category renders a
 * refined line-rendering on a warm stone gradient with gold-foil accents.
 *
 * To use real photography instead, set `image: "assets/img/your.jpg"` on a
 * product (in products.js) or pass an <img> — the renderer prefers photos
 * and falls back to this art automatically.
 */
(function () {
  "use strict";

  var INK = "#1b1d22";
  var INK2 = "#3a3e46";
  var BRONZE = "#a87c4f";
  var BRONZE_D = "#7c5832";
  var GLASS = "#cdd6da";

  /* unique id helper so multiple inline SVGs don't clash on defs */
  var uid = 0;
  function nid() { return "lm" + (++uid); }

  /* shared <defs>: warm paper, light glow, glass sheen, film grain */
  function defs(id) {
    return (
      '<defs>' +
        '<linearGradient id="paper' + id + '" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#f1e9da"/>' +
          '<stop offset="0.55" stop-color="#e7dcc8"/>' +
          '<stop offset="1" stop-color="#dccdb3"/>' +
        '</linearGradient>' +
        '<radialGradient id="glow' + id + '" cx="0.78" cy="0.12" r="0.9">' +
          '<stop offset="0" stop-color="#fff0d6" stop-opacity="0.85"/>' +
          '<stop offset="0.45" stop-color="#f3e2c4" stop-opacity="0.25"/>' +
          '<stop offset="1" stop-color="#f3e2c4" stop-opacity="0"/>' +
        '</radialGradient>' +
        '<linearGradient id="glass' + id + '" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#e9eef0" stop-opacity="0.9"/>' +
          '<stop offset="0.5" stop-color="#c4ced3" stop-opacity="0.65"/>' +
          '<stop offset="1" stop-color="#aab7bd" stop-opacity="0.5"/>' +
        '</linearGradient>' +
        '<filter id="grain' + id + '"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>' +
          '<feColorMatrix type="saturate" values="0"/>' +
          '<feComponentTransfer><feFuncA type="linear" slope="0.06"/></feComponentTransfer>' +
        '</filter>' +
      '</defs>'
    );
  }

  /* warm frame: paper + glow + faint grid + grain + corner ticks */
  function frame(id, w, h, label) {
    var grid = "";
    var step = 56;
    for (var x = step; x < w; x += step) grid += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + h + '"/>';
    for (var y = step; y < h; y += step) grid += '<line x1="0" y1="' + y + '" x2="' + w + '" y2="' + y + '"/>';
    var t = 18, m = 22;
    var ticks =
      '<g stroke="' + BRONZE + '" stroke-width="1.4" fill="none" opacity="0.8">' +
        '<path d="M' + m + ' ' + (m + t) + ' V' + m + ' H' + (m + t) + '"/>' +
        '<path d="M' + (w - m - t) + ' ' + m + ' H' + (w - m) + ' V' + (m + t) + '"/>' +
        '<path d="M' + (w - m) + ' ' + (h - m - t) + ' V' + (h - m) + ' H' + (w - m - t) + '"/>' +
        '<path d="M' + (m + t) + ' ' + (h - m) + ' H' + m + ' V' + (h - m - t) + '"/>' +
      '</g>';
    var cap = label
      ? '<text x="' + (w / 2) + '" y="' + (h - 30) + '" text-anchor="middle" font-family="Inter, sans-serif" ' +
        'font-size="13" letter-spacing="4" fill="' + BRONZE_D + '" opacity="0.75">' + label.toUpperCase() + '</text>'
      : "";
    return (
      '<rect width="' + w + '" height="' + h + '" fill="url(#paper' + id + ')"/>' +
      '<g stroke="' + INK + '" stroke-width="1" opacity="0.06">' + grid + '</g>' +
      '<rect width="' + w + '" height="' + h + '" fill="url(#glow' + id + ')"/>' +
      ticks + cap
    );
  }

  function grainOverlay(id, w, h) {
    return '<rect width="' + w + '" height="' + h + '" filter="url(#grain' + id + ')" opacity="0.5"/>';
  }

  function wrap(id, w, h, inner, label, ratio) {
    return (
      '<svg class="lm-art" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid slice" ' +
      'role="img" aria-label="' + (label || "LUMERA") + '" xmlns="http://www.w3.org/2000/svg">' +
        defs(id) + frame(id, w, h, label) + inner + grainOverlay(id, w, h) +
      '</svg>'
    );
  }

  /* ---- illustration primitives (centered around a 800x600 stage) ---- */
  function pane(x, y, w, h, gid) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="url(#glass' + gid + ')" stroke="' + INK + '" stroke-width="2.4"/>';
  }
  function sheen(x, y, w, h) {
    return '<path d="M' + (x + w * 0.12) + ' ' + (y + h) + ' L' + (x + w * 0.5) + ' ' + y +
      ' M' + (x + w * 0.4) + ' ' + (y + h) + ' L' + (x + w * 0.78) + ' ' + y +
      '" stroke="#ffffff" stroke-width="2" opacity="0.35" fill="none"/>';
  }

  /* ---- per-type scenes (id = unique, returns inner markup) ---- */
  function sceneWindow(id, opts) {
    opts = opts || {};
    var fx = 250, fy = 120, fw = 300, fh = 360;
    var s = '<g>';
    if (opts.timber) {
      s += '<rect x="' + (fx - 26) + '" y="' + (fy - 26) + '" width="' + (fw + 52) + '" height="' + (fh + 52) + '" fill="#c9a06a" opacity="0.55" stroke="' + BRONZE_D + '" stroke-width="2"/>';
    }
    s += '<rect x="' + (fx - 14) + '" y="' + (fy - 14) + '" width="' + (fw + 28) + '" height="' + (fh + 28) + '" fill="none" stroke="' + INK + '" stroke-width="3"/>';
    s += pane(fx, fy, fw, fh, id);
    s += '<line x1="' + (fx + fw / 2) + '" y1="' + fy + '" x2="' + (fx + fw / 2) + '" y2="' + (fy + fh) + '" stroke="' + INK + '" stroke-width="2.4"/>';
    s += sheen(fx, fy, fw / 2, fh);
    /* tilt & turn indicators */
    if (opts.tilt) {
      s += '<path d="M' + fx + ' ' + fy + ' L' + (fx + fw / 2) + ' ' + (fy + fh) + ' L' + (fx + fw) + ' ' + fy + '" fill="none" stroke="' + BRONZE + '" stroke-width="1.6" stroke-dasharray="7 7"/>';
    }
    if (opts.handle) {
      s += '<rect x="' + (fx + fw / 2 - 6) + '" y="' + (fy + fh / 2 - 22) + '" width="12" height="44" rx="6" fill="' + BRONZE + '"/>';
    }
    s += '</g>';
    return s;
  }

  function sceneSliding(id, opts) {
    opts = opts || {};
    var fx = 150, fy = 150, fw = 500, fh = 300;
    var half = fw / 2;
    var s = '<g>';
    s += '<line x1="' + (fx - 20) + '" y1="' + (fy - 16) + '" x2="' + (fx + fw + 20) + '" y2="' + (fy - 16) + '" stroke="' + INK + '" stroke-width="3"/>';
    s += '<line x1="' + (fx - 20) + '" y1="' + (fy + fh + 16) + '" x2="' + (fx + fw + 20) + '" y2="' + (fy + fh + 16) + '" stroke="' + INK + '" stroke-width="3"/>';
    s += pane(fx, fy, half - 6, fh, id);
    s += pane(fx + half - 12, fy - 8, half + 12, fh + 16, id);
    s += sheen(fx + half - 12, fy - 8, (half + 12) / 2, fh + 16);
    s += '<path d="M' + (fx + fw - 70) + ' ' + (fy + fh + 40) + ' h120 m0 0 l-16 -8 m16 8 l-16 8" stroke="' + BRONZE + '" stroke-width="2" fill="none"/>';
    if (opts.motor) {
      s += '<rect x="' + (fx + fw / 2 - 40) + '" y="' + (fy - 44) + '" width="80" height="20" rx="4" fill="' + BRONZE + '" opacity="0.9"/>';
      s += '<text x="' + (fx + fw / 2) + '" y="' + (fy - 29) + '" text-anchor="middle" font-family="Inter" font-size="11" fill="#fff" letter-spacing="2">AUTO</text>';
    }
    s += '</g>';
    return s;
  }

  function sceneDoor(id, opts) {
    opts = opts || {};
    var fx = 280, fy = 90, fw = 240, fh = 420;
    var s = '<g>';
    s += '<rect x="' + (fx - 16) + '" y="' + (fy - 16) + '" width="' + (fw + 32) + '" height="' + (fh + 16) + '" fill="none" stroke="' + INK + '" stroke-width="3"/>';
    if (opts.armoured) {
      s += '<rect x="' + fx + '" y="' + fy + '" width="' + fw + '" height="' + fh + '" fill="#2b2620" stroke="' + INK + '" stroke-width="2.4"/>';
      s += '<line x1="' + (fx + fw / 2) + '" y1="' + fy + '" x2="' + (fx + fw / 2) + '" y2="' + (fy + fh) + '" stroke="' + BRONZE_D + '" stroke-width="2"/>';
      for (var i = 1; i < 9; i++) {
        s += '<line x1="' + fx + '" y1="' + (fy + i * fh / 9) + '" x2="' + (fx + fw) + '" y2="' + (fy + i * fh / 9) + '" stroke="' + BRONZE_D + '" stroke-width="1" opacity="0.5"/>';
      }
      s += '<circle cx="' + (fx + fw / 2) + '" cy="' + (fy + fh / 2) + '" r="36" fill="none" stroke="' + BRONZE + '" stroke-width="2"/>';
      s += '<circle cx="' + (fx + fw / 2) + '" cy="' + (fy + fh / 2) + '" r="14" fill="' + BRONZE + '" opacity="0.7"/>';
    } else {
      s += pane(fx, fy, fw, fh, id);
      s += sheen(fx, fy, fw, fh);
      s += '<circle cx="' + (fx + fw - 26) + '" cy="' + (fy + fh / 2) + '" r="6" fill="' + BRONZE + '"/>';
      s += '<rect x="' + (fx + fw - 32) + '" y="' + (fy + fh / 2 - 30) + '" width="12" height="60" rx="6" fill="' + BRONZE + '"/>';
      if (opts.swing) {
        s += '<path d="M' + fx + ' ' + (fy + fh) + ' A ' + fw + ' ' + fw + ' 0 0 1 ' + (fx + fw) + ' ' + (fy + fh - fw) + '" fill="none" stroke="' + BRONZE + '" stroke-width="1.4" stroke-dasharray="7 7"/>';
      }
    }
    s += '</g>';
    return s;
  }

  function sceneFacade(id) {
    var fx = 130, fy = 80, cols = 5, rows = 4, cw = 108, ch = 110;
    var s = '<g>';
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var x = fx + c * cw, y = fy + r * ch;
        s += pane(x, y, cw - 6, ch - 6, id);
        if ((r + c) % 3 === 0) s += sheen(x, y, (cw - 6), (ch - 6));
      }
    }
    s += '<rect x="' + fx + '" y="' + fy + '" width="' + (cols * cw - 6) + '" height="' + (rows * ch - 6) + '" fill="none" stroke="' + INK + '" stroke-width="3"/>';
    s += '</g>';
    return s;
  }

  function sceneSunroom(id) {
    var bx = 150, by = 250, bw = 500, bh = 230, peak = 120;
    var s = '<g>';
    /* pitched roof */
    s += '<path d="M' + (bx - 20) + ' ' + by + ' L' + (bx + bw / 2) + ' ' + (by - peak) + ' L' + (bx + bw + 20) + ' ' + by + '" fill="url(#glass' + id + ')" stroke="' + INK + '" stroke-width="3"/>';
    s += '<line x1="' + (bx + bw / 2) + '" y1="' + (by - peak) + '" x2="' + (bx + bw / 2) + '" y2="' + by + '" stroke="' + INK + '" stroke-width="2"/>';
    s += '<line x1="' + (bx + bw * 0.25 - 10) + '" y1="' + by + '" x2="' + (bx + bw / 2) + '" y2="' + (by - peak / 2) + '" stroke="' + INK + '" stroke-width="1.6" opacity="0.6"/>';
    s += '<line x1="' + (bx + bw * 0.75 + 10) + '" y1="' + by + '" x2="' + (bx + bw / 2) + '" y2="' + (by - peak / 2) + '" stroke="' + INK + '" stroke-width="1.6" opacity="0.6"/>';
    /* glazed body */
    s += pane(bx, by, bw, bh, id);
    for (var i = 1; i < 4; i++) s += '<line x1="' + (bx + i * bw / 4) + '" y1="' + by + '" x2="' + (bx + i * bw / 4) + '" y2="' + (by + bh) + '" stroke="' + INK + '" stroke-width="2"/>';
    s += sheen(bx, by, bw / 4, bh);
    s += sheen(bx + bw / 2, by, bw / 4, bh);
    s += '</g>';
    return s;
  }

  /* dispatch by product type / keywords */
  function sceneForType(id, type) {
    var t = (type || "").toLowerCase();
    if (t.indexOf("sunroom") > -1) return sceneSunroom(id);
    if (t.indexOf("curtain") > -1) return sceneFacade(id);
    if (t.indexOf("skylight") > -1) return sceneSliding(id, { motor: true });
    if (t.indexOf("armour") > -1 || t.indexOf("armor") > -1 || t.indexOf("entry") > -1) return sceneDoor(id, { armoured: true });
    if (t.indexOf("sliding") > -1) return sceneSliding(id, { motor: t.indexOf("electric") > -1 });
    if (t.indexOf("hinged") > -1 || t.indexOf("swing") > -1) return sceneDoor(id, { swing: true });
    if (t.indexOf("awning") > -1) return sceneWindow(id, { tilt: true, handle: true, timber: false });
    if (t.indexOf("outswing") > -1) return sceneWindow(id, { swing: true, handle: true });
    if (t.indexOf("timber") > -1 || t.indexOf("clad") > -1) return sceneWindow(id, { tilt: true, handle: true, timber: true });
    return sceneWindow(id, { tilt: true, handle: true });
  }

  /* ---------------- cinematic hero ---------------- */
  function hero() {
    var id = nid(), w = 1600, h = 1000;
    var win = "";
    /* glowing window grid on the house */
    var hx = 980, hy = 560, hw = 430, hh = 150;
    win += '<rect x="' + hx + '" y="' + hy + '" width="' + hw + '" height="' + hh + '" fill="#ffe7bd"/>';
    for (var i = 1; i < 5; i++) win += '<line x1="' + (hx + i * hw / 5) + '" y1="' + hy + '" x2="' + (hx + i * hw / 5) + '" y2="' + (hy + hh) + '" stroke="#caa06a" stroke-width="3"/>';
    var grass = "";
    for (var g = 0; g < 120; g++) {
      var gx = (g * 13.7) % w;
      var gh = 18 + (g * 7) % 40;
      grass += '<line x1="' + gx + '" y1="1000" x2="' + (gx + 6) + '" y2="' + (1000 - gh) + '" stroke="#2a2018" stroke-width="2" opacity="0.5"/>';
    }
    return (
      '<svg class="lm-hero-art" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid slice" ' +
      'aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
        '<defs>' +
          '<linearGradient id="sky' + id + '" x1="0" y1="0" x2="0" y2="1">' +
            '<stop offset="0" stop-color="#15120f"/>' +
            '<stop offset="0.4" stop-color="#3a2c20"/>' +
            '<stop offset="0.68" stop-color="#6e4d2f"/>' +
            '<stop offset="0.82" stop-color="#b07f4c"/>' +
            '<stop offset="1" stop-color="#1d1610"/>' +
          '</linearGradient>' +
          '<radialGradient id="sun' + id + '" cx="0.72" cy="0.78" r="0.5">' +
            '<stop offset="0" stop-color="#ffe9c4" stop-opacity="0.95"/>' +
            '<stop offset="0.4" stop-color="#e8b878" stop-opacity="0.35"/>' +
            '<stop offset="1" stop-color="#e8b878" stop-opacity="0"/>' +
          '</radialGradient>' +
          '<filter id="hgrain' + id + '"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2"/>' +
            '<feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope="0.05"/></feComponentTransfer></filter>' +
        '</defs>' +
        '<rect width="' + w + '" height="' + h + '" fill="url(#sky' + id + ')"/>' +
        '<rect width="' + w + '" height="' + h + '" fill="url(#sun' + id + ')"/>' +
        /* distant mountains */
        '<path d="M0 720 L320 600 L560 690 L820 560 L1100 700 L1380 590 L1600 680 V1000 H0 Z" fill="#241a13" opacity="0.7"/>' +
        '<path d="M0 800 L260 720 L520 790 L860 690 L1180 800 L1460 720 L1600 780 V1000 H0 Z" fill="#1a120c" opacity="0.85"/>' +
        /* villa: lower slab + cantilevered upper volume */
        '<rect x="900" y="700" width="560" height="160" fill="#0f0b08"/>' +
        '<rect x="940" y="540" width="520" height="170" fill="#161009"/>' +
        '<rect x="940" y="540" width="520" height="170" fill="none" stroke="#3a2c1e" stroke-width="2"/>' +
        win +
        '<rect x="1360" y="560" width="70" height="80" fill="#ffe7bd" opacity="0.85"/>' +
        /* ground + grass */
        '<rect x="0" y="860" width="1600" height="140" fill="#120c08"/>' +
        grass +
        '<rect width="' + w + '" height="' + h + '" filter="url(#hgrain' + id + ')" opacity="0.5"/>' +
        /* cinematic vignette */
        '<rect width="' + w + '" height="' + h + '" fill="url(#sun' + id + ')" opacity="0"/>' +
      '</svg>'
    );
  }

  /* ---------------- engineering detail (profile cross-section) ---- */
  function profileDetail() {
    var id = nid(), w = 800, h = 1000;
    var s = '<svg class="lm-art" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">';
    s += defs(id) + frame(id, w, h, "Thermal-break profile");
    var cx = 400;
    /* layered aluminium / polyamide / aluminium cross section */
    s += '<g stroke="' + INK + '" stroke-width="2.4" fill="none">';
    s += '<rect x="' + (cx - 150) + '" y="200" width="120" height="600" fill="#cbb38f"/>';
    s += '<rect x="' + (cx - 30) + '" y="240" width="60" height="520" fill="#b8895a"/>';
    s += '<rect x="' + (cx + 30) + '" y="200" width="120" height="600" fill="#cbb38f"/>';
    s += '</g>';
    /* polyamide hatch */
    for (var y = 250; y < 760; y += 22) s += '<line x1="' + (cx - 30) + '" y1="' + y + '" x2="' + (cx + 30) + '" y2="' + (y - 18) + '" stroke="#7c5832" stroke-width="1.4"/>';
    /* glazing units */
    s += '<rect x="' + (cx - 150) + '" y="360" width="40" height="280" fill="url(#glass' + id + ')" stroke="' + INK + '" stroke-width="2"/>';
    s += '<rect x="' + (cx + 110) + '" y="360" width="40" height="280" fill="url(#glass' + id + ')" stroke="' + INK + '" stroke-width="2"/>';
    /* dimension lines */
    s += '<g stroke="' + BRONZE + '" stroke-width="1.4">';
    s += '<line x1="' + (cx - 150) + '" y1="160" x2="' + (cx + 150) + '" y2="160"/>';
    s += '<line x1="' + (cx - 150) + '" y1="150" x2="' + (cx - 150) + '" y2="170"/>';
    s += '<line x1="' + (cx + 150) + '" y1="150" x2="' + (cx + 150) + '" y2="170"/>';
    s += '</g>';
    s += grainOverlay(id, w, h) + '</svg>';
    return s;
  }

  /* ---------------- public renderers ---------------- */
  function product(type, label) {
    var id = nid();
    return wrap(id, 800, 600, sceneForType(id, type), label || type || "");
  }
  function category(catId, label) {
    var id = nid();
    var inner;
    if (catId === "windows") inner = sceneWindow(id, { tilt: true, handle: true });
    else if (catId === "doors") inner = sceneDoor(id, { swing: true });
    else if (catId === "facades") inner = sceneFacade(id);
    else if (catId === "sunrooms") inner = sceneSunroom(id);
    else inner = sceneWindow(id, { tilt: true });
    return wrap(id, 800, 600, inner, label || catId);
  }

  window.LUMERA_ART = {
    hero: hero,
    product: product,
    category: category,
    profile: profileDetail,
    scene: function (type, label, w, h) { var id = nid(); return wrap(id, w || 800, h || 600, sceneForType(id, type), label); }
  };
})();
