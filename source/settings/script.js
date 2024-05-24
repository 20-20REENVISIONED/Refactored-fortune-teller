//Attach the global volume bar to match and change the associated preference
const globalVolumeBar = document.querySelector("volume-adjust-global input");

globalVolumeBar.value = localStorage["globalVolume"];

globalVolumeBar.addEventListener("change", () => {
  localStorage["globalVolume"] = globalVolumeBar.value;
});

//Attach the language selector to match and change the associated preference
const langauge = localStorage["language"].split("-")[0];
const languageSelector = document.querySelector("language-selector select");

languageSelector.value = langauge;

languageSelector.addEventListener("change", () => {
  localStorage["language"] = languageSelector.value;
});
