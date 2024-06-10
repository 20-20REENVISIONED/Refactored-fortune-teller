/**
 * script.js: Random Fortune Generation and Display Logic
 *
 * This JavaScript module imports predefined fortune outcomes from the "fortunes.js" file and
 * provides functionality to randomly select and display these fortunes based on the user's
 * interaction with the palm reading application (head, heart,
 * life, fate, and sun lines within user's palm reading).
 *
 * Dependencies:
 * - fortunes.js: Contains arrays of possible outcomes for various palm lines.
 */
import { heads, hearts, lifes, fates, suns } from "./fortunes.js";

/**
 * Generates random fortunes. Called when the app finishes analyzing the palm.
 */
export function handleFortune() {
  let headIndex = Math.floor(Math.random() * heads.length);
  let heartIndex = Math.floor(Math.random() * hearts.length);
  let lifeIndex = Math.floor(Math.random() * lifes.length);
  let fateIndex = Math.floor(Math.random() * fates.length);
  let sunIndex = Math.floor(Math.random() * suns.length);

  let headResult = heads[headIndex];
  let heartResult = hearts[heartIndex];
  let lifeResult = lifes[lifeIndex];
  let fateResult = fates[fateIndex];
  let sunResult = suns[sunIndex];

  document.getElementById("head-tab").querySelector("p").innerText =
    window.i18n.i18n(headResult);
  document.getElementById("heart-tab").querySelector("p").innerText =
    window.i18n.i18n(heartResult);
  document.getElementById("life-tab").querySelector("p").innerText =
    window.i18n.i18n(lifeResult);
  document.getElementById("fate-tab").querySelector("p").innerText =
    window.i18n.i18n(fateResult);
  document.getElementById("sun-tab").querySelector("p").innerText =
    window.i18n.i18n(sunResult);
}

/**
 * The tabs' `<input type=radio>` elements.
 * @type {ArrayLike<HTMLInputElement>}
 */
const tabLabels = document.querySelectorAll('input[name="tab"]');
/**
 * Each tabs' tab content.
 * @type {ArrayLike<HTMLDivElement>}
 */
const tabContents = document.querySelectorAll(".tab-content");

tabLabels.forEach(function (label) {
  label.addEventListener("change", function () {
    tabContents.forEach(function (content) {
      content.hidden = true;
    });

    const selectedContent = document.getElementById(`${this.value}-tab`);
    selectedContent.hidden = false;
  });
});
