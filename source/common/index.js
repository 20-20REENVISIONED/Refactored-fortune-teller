/**
 * @file A JavaScript file that is included on every page. If we want to apply a
 * script onto every page for consistency, this is the place to do so.
 */

import "./nav.js";

import Banana from 'https://cdn.jsdelivr.net/npm/banana-i18n@2.3.3/+esm'

const banana = new Banana('en')


function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = banana.i18n(key);
  });
}

function setLang(lang='zh-hans') {
  fetch(
    `/Refactored-fortune-teller/source/i18n/${lang}.json`
  ).then(
    (response) => response.json()
  ).then((messages) => {
    banana.setLocale(lang)
    banana.load(messages, lang);
  }).then(updateTexts);
}

setLang('en')


