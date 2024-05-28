import Banana from "https://cdn.jsdelivr.net/npm/banana-i18n@2.3.3/+esm";

const banana = new Banana("en");

window.i18n = banana;

function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = banana.i18n(key);
  });
}

export function setLang(lang = "zh-hans") {
  fetch(`../i18n/${lang}.json`)
    .then((response) => response.json())
    .then((messages) => {
      banana.setLocale(lang);
      banana.load(messages, lang);
    })
    .then(updateTexts);
}
