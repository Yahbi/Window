# LUMERA — Windows &amp; Doors

A luxury marketing & catalogue website for **LUMERA**, a premium architectural
glazing brand: windows, doors, façades and sunrooms.

It is a **zero-build static site** — plain HTML, CSS and vanilla JavaScript.
No frameworks, no compile step. Open it, edit it, deploy it anywhere.

---

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000

# …or Node
npx serve .
```

## Structure

```
index.html          Home (hero, collections, engineering, performance, CTA)
products.html       Full collection grid with category filter
product.html        Product detail (reads ?id=… from products.js)
about.html          Atelier / brand story
contact.html        Request-a-quote form (front-end demo)
assets/
  css/styles.css    Design system (colours, type, components)
  js/products.js    ← all product data lives here
  js/art.js         Bespoke SVG artwork (hero + per-product illustrations)
  js/main.js        Rendering & interactions
  img/favicon.svg   Brand mark
```

## Editing content

**Products** — everything is data-driven. Edit `assets/js/products.js`:
add, remove or change entries and the grid, filters and detail pages update
automatically. Categories are defined at the top of the same file.

**Imagery** — the site ships with custom-drawn SVG illustrations so it always
looks complete with no external dependencies. To use your **own photography**,
drop files into `assets/img/` and set the `image` field on a product, e.g.

```js
image: "assets/img/products/aria-64.jpg"
```

Any product with a real photo shows it; anything left as `image: null`
falls back to the bespoke SVG art. (Use your own, un-watermarked photos.)

**Brand colours & type** — change the CSS variables at the top of
`assets/css/styles.css` (`--bronze`, `--ink`, `--bone`, fonts, etc.).

## Contact form

`contact.html` includes a working front-end form that shows a success state.
To actually receive submissions, point it at your provider — e.g.
[Formspree](https://formspree.io), [Basin](https://usebasin.com), Netlify Forms,
or your own endpoint — by adding an `action`/`method` to the `<form>` and
removing the demo `preventDefault` handler in `assets/js/main.js` (`initContact`).

## Deploy

It's static, so host it for free on:

- **Vercel** – `vercel` (or drag-and-drop the folder)
- **Netlify** – drag-and-drop / connect the repo
- **GitHub Pages** – enable Pages on the repo, serve from root
- **Cloudflare Pages** – connect the repo, no build command

---

© LUMERA. Brand and copy are placeholders you can adapt freely.
