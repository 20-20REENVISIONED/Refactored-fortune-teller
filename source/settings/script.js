/**
 * This script manages user preferences for the 'Settings' page.
 * It controls two main user settings: global volume and language preference.
 *
 * The volume setting is retrieved from and stored to the local storage when adjusted,
 * allowing the user's preference to persist across sessions. The volume control is
 * implemented using an input range slider within the "volume-adjust-global" container.
 *
 * The language setting allows the user to select their preferred language from a dropdown menu,
 * which is also saved to local storage for consistency across the application. Language changes
 * are dynamically applied using the imported `setLang` function from "../common/setLang.js".
 *
 */

import { setLang } from "../common/setLang.js";

//Attach the global volume bar to match and change the associated preference
const globalVolumeBar = document.querySelector("volume-adjust-global input");

globalVolumeBar.value = localStorage["globalVolume"];

globalVolumeBar.addEventListener("change", () => {
  localStorage["globalVolume"] = globalVolumeBar.value;
});

//Attach the language selector to match and change the associated preference
let langauge = localStorage["language"].split("-")[0];
const languageSelector = document.querySelector("language-selector select");

if (langauge == "zh") {
  langauge =
    langauge + "-" + localStorage["language"].split("-")[1].toLowerCase();
}

languageSelector.value = langauge;

languageSelector.addEventListener("change", () => {
  localStorage["language"] = languageSelector.value;
  setLang(localStorage["language"]);
});

document.addEventListener("DOMContentLoaded", function () {
  var feedbackButton = document.getElementById("feedback-button");

  if (feedbackButton) {
    feedbackButton.addEventListener("click", function () {
      window.location.href = "../feedback-page/index.html"; // Change this URL to your feedback page URL
    });
  }
});
