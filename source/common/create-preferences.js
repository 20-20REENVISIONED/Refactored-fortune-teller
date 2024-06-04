/**
 * Defines what the preference keys and values are.
 * @typedef {object} defaultPreferenceKeyValues
 * @property {float} globalVolume - The globalVolume of all sounds in the web app.
 * @property {string} language - The language to display the web app in.
 */

/**
 * An object that has as all the  preference keys and values.
 * @type {defaultPreferenceKeyValues}
 */
const defaultPreferenceKeyValues = {
  globalVolume: 0.5,
  language: "en",
};

if (localStorage.length != Object.entries(defaultPreferenceKeyValues).length) {
  localStorage.clear();
  for (const [key, value] of Object.entries(defaultPreferenceKeyValues)) {
    console.log(key);
    localStorage[key] = value;
    if (key == "language") {
      let langauge = navigator.language.split("-")[0];

      //Decision logic to decide to use traditional or simplifed Chinese.
      if (langauge == "zh") {
        //Use Simplified characters by default
        let characterStyle = "hans";

        //If navigator.language specifies traditional characters, or if it
        //specifies Chinese as used in Hong Kong, Macau or Taiwan, use traditional.
        navigator.language
          .split("-")
          .map((e) => e.toLowerCase())
          .forEach((e) => {
            if (["hant", "hk", "mo", "tw"].includes(e)) {
              characterStyle = "hant";
            }
          });

        localStorage[key] = langauge + "-" + characterStyle;
      }
    }
  }
}
