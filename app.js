"use strict";
const cards = [...document.querySelectorAll(".product-card")];
const filters = [...document.querySelectorAll(".filter")];
const count = document.querySelector(".result-count");
filters.forEach(button => {
  button.disabled = false;
  button.addEventListener("click", () => {
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle("is-active", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    cards.forEach(card => { card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter; });
    const visible = cards.filter(card => !card.hidden).length;
    count.textContent = `${visible} opening ${visible === 1 ? "study" : "studies"}`;
  });
});
const studies = {
  windows: {title: "Tilt & turn", description: "A window composition that explores a framed view and the rhythm of an opening.", focus: "The balance between the opening and the wall around it, the weight of the frame and the visual treatment of movement."},
  sliding: {title: "Sliding", description: "A broad horizontal composition with overlapping lines and a connection between spaces.", focus: "Panel rhythm, the sense of width and the relationship between an interior and the view beyond."},
  hinged: {title: "Hinged", description: "A single opening, with an emphasis on the frame, threshold and movement of a leaf.", focus: "The entry proportion, the expression of the frame and how the opening sits within the larger composition."}
};
const dialog = document.querySelector("#study-dialog");
let opener;
if (dialog && typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-study]").forEach(link => {
    link.setAttribute("aria-haspopup", "dialog");
    link.addEventListener("click", event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      const study = studies[link.dataset.study];
      if (!study) return;
      event.preventDefault();
      opener = link;
      document.querySelector("#dialog-title").textContent = study.title;
      document.querySelector("#dialog-description").textContent = study.description;
      document.querySelector("#dialog-focus").textContent = study.focus;
      dialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });
  const close = dialog.querySelector(".close-button");
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", event => {
    if (event.key === "Tab") { event.preventDefault(); close.focus(); }
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    if (opener && opener.isConnected) opener.focus();
  });
}
