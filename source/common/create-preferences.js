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
  language: navigator.language,
};

if (localStorage.length != Object.entries(defaultPreferenceKeyValues).length) {
  localStorage.clear();
  for (const [key, value] of Object.entries(defaultPreferenceKeyValues)) {
    console.log(key);
    localStorage[key] = value;
  }
}
