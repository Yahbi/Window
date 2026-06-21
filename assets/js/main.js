/* LUMERA — site behaviour */
(function () {
  "use strict";

  var PRODUCTS = window.LUMERA_PRODUCTS || [];
  var CATEGORIES = window.LUMERA_CATEGORIES || [];
  var ART = window.LUMERA_ART;

  /* ---------- helpers ---------- */
  function $(s, ctx) { return (ctx || document).querySelector(s); }
  function $all(s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); }
  function byId(id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; }
  function catLabel(id) { var c = CATEGORIES.filter(function (x) { return x.id === id; })[0]; return c ? c.label : id; }
  function esc(str) { return String(str).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  /* media: prefer real photo (per-product, then explicit), else bespoke SVG art */
  function productMedia(p, label) {
    var map = window.LUMERA_PRODUCT_PHOTOS || {};
    var src = p.image || map[p.id];
    if (src) return '<img src="' + esc(src) + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.style.display=\'none\'">';
    return ART ? ART.product(p.type, label || p.type) : "";
  }

  /* ---------- header: solid on scroll + mobile nav ---------- */
  function initHeader() {
    var header = $(".site-header");
    if (!header) return;
    var solidAfter = 40;
    function onScroll() { header.classList.toggle("is-solid", window.scrollY > solidAfter); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = $(".nav-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        document.body.classList.toggle("nav-open");
        var open = document.body.classList.contains("nav-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      $all(".nav a").forEach(function (a) {
        a.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
      });
    }
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    var els = $all(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- year + hero/profile art injection ---------- */
  function initStatic() {
    $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
    var PHOTOS = window.LUMERA_PHOTOS;

    // hero: real photo if available, else cinematic SVG
    var heroSlot = $("[data-hero-art]");
    if (heroSlot) {
      if (PHOTOS && PHOTOS.hero) heroSlot.innerHTML = '<img class="hero__photo" src="' + PHOTOS.hero + '" alt="">';
      else if (ART) heroSlot.innerHTML = ART.hero();
    }

    // photo-backed category cards & feature sections
    $all("[data-photo]").forEach(function (el) {
      var src = PHOTOS && PHOTOS[el.getAttribute("data-photo")];
      if (src) { el.style.backgroundImage = "url('" + src + "')"; el.classList.add("has-photo"); }
    });

    // SVG fallbacks (only fire where photo hooks weren't used)
    if (ART) {
      var hs = $("[data-hero-art]"); if (hs && !hs.innerHTML) hs.innerHTML = ART.hero();
      $all("[data-profile-art]").forEach(function (el) { el.innerHTML = ART.profile(); });
      $all("[data-cat-art]").forEach(function (el) { el.innerHTML = ART.category(el.getAttribute("data-cat-art")); });
      $all("[data-scene]").forEach(function (el) {
        el.innerHTML = ART.scene(el.getAttribute("data-scene"), el.getAttribute("data-scene-label") || "");
      });
    }
  }

  /* ---------- home: featured products ---------- */
  function initFeatured() {
    var slot = $("[data-featured]");
    if (!slot) return;
    var ids = (slot.getAttribute("data-featured") || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    var list = ids.length ? ids.map(byId).filter(Boolean) : PRODUCTS.slice(0, 6);
    slot.innerHTML = list.map(cardHTML).join("");
  }

  /* ---------- category counts on home ---------- */
  function initCatCounts() {
    $all("[data-cat-count]").forEach(function (el) {
      var id = el.getAttribute("data-cat-count");
      var n = PRODUCTS.filter(function (p) { return p.category === id; }).length;
      el.textContent = n + (n === 1 ? " model" : " models");
    });
  }

  /* ---------- product card ---------- */
  function cardHTML(p) {
    var uf = p.performance && (p.performance["U-factor"] || p.performance["U-Factor"]);
    return (
      '<a class="pcard reveal" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
        '<div class="pcard__media">' +
          productMedia(p) +
          '<span class="pcard__series">' + esc(p.series) + '</span>' +
          '<span class="pcard__code">' + esc(p.code) + '</span>' +
        '</div>' +
        '<div class="pcard__body">' +
          '<span class="pcard__type">' + esc(p.type) + '</span>' +
          '<h3 class="pcard__title">' + esc(p.name.replace(p.code + " ", "")) + '</h3>' +
          '<p class="pcard__desc">' + esc(p.tagline) + '</p>' +
          '<div class="pcard__foot">' +
            '<span class="pcard__uf">' + (uf ? 'U-factor <b>' + esc(uf) + '</b>' : esc(catLabel(p.category))) + '</span>' +
            '<span class="pcard__arrow">' + ARROW + '</span>' +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  /* ---------- products page: grid + filter ---------- */
  function initCatalogue() {
    var grid = $("[data-catalogue]");
    if (!grid) return;
    var bar = $("[data-filter]");
    var current = (new URLSearchParams(location.search).get("category")) || "all";

    function render(cat) {
      var list = cat === "all" ? PRODUCTS : PRODUCTS.filter(function (p) { return p.category === cat; });
      grid.innerHTML = list.length ? list.map(cardHTML).join("") : '<p class="empty">No products in this collection yet.</p>';
      // re-run reveal for freshly inserted cards
      $all(".reveal", grid).forEach(function (el) { el.classList.add("is-in"); });
      var countEl = $("[data-result-count]");
      if (countEl) countEl.textContent = list.length + (list.length === 1 ? " product" : " products");
    }

    if (bar) {
      var btns = [{ id: "all", label: "All" }].concat(CATEGORIES.map(function (c) { return { id: c.id, label: c.label }; }));
      bar.innerHTML = btns.map(function (b) {
        return '<button data-cat="' + b.id + '"' + (b.id === current ? ' class="is-active"' : "") + '>' + esc(b.label) + '</button>';
      }).join("");
      bar.addEventListener("click", function (e) {
        var btn = e.target.closest("button[data-cat]");
        if (!btn) return;
        current = btn.getAttribute("data-cat");
        $all("button", bar).forEach(function (x) { x.classList.toggle("is-active", x === btn); });
        render(current);
        var url = new URL(location.href);
        if (current === "all") url.searchParams.delete("category"); else url.searchParams.set("category", current);
        history.replaceState({}, "", url);
      });
    }
    render(current);
  }

  /* ---------- product detail page ---------- */
  function initDetail() {
    var root = $("[data-detail]");
    if (!root) return;
    var id = new URLSearchParams(location.search).get("id");
    var p = id && byId(id);
    if (!p) {
      root.innerHTML = '<div class="container section"><p class="empty">Product not found. <a class="textlink" href="products.html">Back to the collection ' + ARROW + '</a></p></div>';
      return;
    }
    document.title = p.name + " — LUMERA";

    var specRows = Object.keys(p.specs).map(function (k) {
      return '<div class="spectable__row"><dt>' + esc(k) + '</dt><dd>' + esc(p.specs[k]) + '</dd></div>';
    }).join("");

    var perfIcons = {
      "Air leakage": '<path d="M4 8h11a3 3 0 1 0-3-3"/><path d="M4 14h15a3 3 0 1 1-3 3"/><path d="M4 11h9"/>',
      "Sound (STC)": '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M16 8a5 5 0 0 1 0 8"/>',
      "Structural test pressure": '<path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6z"/>',
      "Water penetration": '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
      "U-factor": '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'
    };
    var perfCells = Object.keys(p.performance).map(function (k) {
      var ic = perfIcons[k] || perfIcons["U-factor"];
      return (
        '<div class="perf-cell">' +
          '<svg class="perf-cell__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + ic + '</svg>' +
          '<div class="perf-cell__val">' + esc(p.performance[k]) + '</div>' +
          '<div class="perf-cell__label">' + esc(k) + '</div>' +
        '</div>'
      );
    }).join("");

    var highlights = p.highlights.map(function (h) {
      return '<li>' + CHECK + '<span>' + esc(h) + '</span></li>';
    }).join("");

    var chips = (p.openings || []).map(function (o) { return '<span class="chip">' + esc(o) + '</span>'; }).join("");

    var related = PRODUCTS.filter(function (x) { return x.category === p.category && x.id !== p.id; }).slice(0, 3);
    var relatedHTML = related.length
      ? '<section class="section section--tight"><div class="container">' +
          '<div class="section-head reveal"><span class="eyebrow">More from ' + esc(catLabel(p.category)) + '</span></div>' +
          '<div class="grid product-grid">' + related.map(cardHTML).join("") + '</div>' +
        '</div></section>'
      : "";

    root.innerHTML =
      '<section class="detail"><div class="container">' +
        '<nav class="crumbs reveal"><a href="index.html">Home</a><span>/</span>' +
          '<a href="products.html?category=' + p.category + '">' + esc(catLabel(p.category)) + '</a><span>/</span>' +
          '<a aria-current="page">' + esc(p.code) + '</a></nav>' +
        '<div class="detail__top">' +
          '<div class="detail__media reveal">' + productMedia(p, p.code) + '</div>' +
          '<div class="detail__info reveal">' +
            '<div class="detail__series">' + esc(p.series) + ' Series · ' + esc(p.code) + '</div>' +
            '<h1>' + esc(p.name.replace(p.code + " ", "")) + '</h1>' +
            '<p class="detail__tagline">' + esc(p.tagline) + '</p>' +
            '<p class="detail__summary">' + esc(p.summary) + '</p>' +
            '<ul class="detail__highlights">' + highlights + '</ul>' +
            '<div class="detail__actions">' +
              '<a class="btn btn--bronze" href="contact.html?product=' + encodeURIComponent(p.code) + '">Request a quote ' + ARROW + '</a>' +
              '<a class="btn btn--ghost" href="products.html?category=' + p.category + '">Browse ' + esc(catLabel(p.category)) + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="detail__cols">' +
          '<div class="reveal"><span class="eyebrow">Specifications</span><dl class="spectable">' + specRows + '</dl>' +
            (chips ? '<h4 class="mt-4">Opening methods</h4><div class="chips">' + chips + '</div>' : "") +
          '</div>' +
          '<div class="reveal"><span class="eyebrow">Performance</span><div class="perf-grid">' + perfCells + '</div>' +
            '<p class="form__note mt-4">Performance figures are nominal and depend on configuration, glazing and installation. Custom sizes, finishes and glass build-ups available on request.</p>' +
          '</div>' +
        '</div>' +
      '</div></section>' +
      relatedHTML;

    initReveal();
  }

  /* ---------- contact form (front-end only) ---------- */
  function initContact() {
    var form = $("[data-contact-form]");
    if (!form) return;
    var product = new URLSearchParams(location.search).get("product");
    if (product) {
      var msg = form.querySelector('[name="message"]');
      if (msg && !msg.value) msg.value = "I'd like a quote for the " + product + ". ";
      var sel = form.querySelector('[name="interest"]');
      if (sel) { Array.prototype.forEach.call(sel.options, function (o) { if (o.value === product) sel.value = product; }); }
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = $(".form__success", form.parentNode) || $(".form__success");
      if (ok) ok.classList.add("is-visible");
      form.reset();
      if (ok && ok.scrollIntoView) ok.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initHeader();
    initStatic();
    initFeatured();
    initCatCounts();
    initCatalogue();
    initDetail();
    initContact();
    initReveal();
  });
})();
