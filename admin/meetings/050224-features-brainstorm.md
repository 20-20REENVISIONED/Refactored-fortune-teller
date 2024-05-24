# 💡 Ideas for New Features

- [L] **Setup of a CI/CD pipeline**
  - Automatically flattens HTML, CSS, and JavaScript files into one HTML file to reduce latency (ping-ponging). Maybe use something like this.
  
- [M] **Make site installable as a Progressive Web App**
  - {uncertainty: low} Provide offline access.

- [M] **Setup for site translation**
  - {uncertainty: high} Allow the site to be translated into various languages.
  - Possible CI/CD pipeline that generates an `en` folder, `zh` folder, etc., by reading localization overrides for text.
  - Alternatively, this can be done locally in JavaScript with a JSON containing localizations.
  - Support the usage of different writing modes for applicable languages.

- [L/M] **Add a fortune-telling feature**
  - {uncertainty: high} Use ChatGPT to generate a response for the user.
  - Implement/configure a backend for managing ChatGPT calls.

- [L] **Add background music**
  - {uncertainty: high} Play background music when certain actions are taken on the website.
  - Could use voice recognition API (target music by age) and/or Suno (music generation).

- [L] **Add opening animation**
  - {uncertainty: high} Implement a CSS animation for the opening sequence.

- [L] **Add voiceover via text-to-speech**
  - {uncertainty: high} Provide voiceover for portions of the website.

- **Add user settings**
  - {uncertainty: low} Allow users to change the following:
    - Language
    - Enable/disable music
    - Theme/color background (match system light/dark mode)
    - User feedback option (consider Google Analytics)
    - Reference user’s font settings/increase font size

# 🪲 Bugs That Probably Need to Be Fixed

- [H, Easy] **Notify users with JavaScript off**
  - Inform users that the site will not work (probably a `<noscript>` tag).

- [M] **Fix audio issues**
  - Ensure fortune-cookie reading voices work across different devices/OS.

- [H/M] **Fix visibility of open cookie button on iPhone SE3 in landscape**
  - May be a flexbox-related issue.

- [L] **Fix skip animation button**
  - Intermittently broken when opening cookie several times (potentially asynchronous call issue; reproduce by adding timeout calls to experiment with different event ordering).
  - Ensure skipping animation in Fortune Cookie does not skip the text-to-speech.

# ✅ Nice to Fix Bugs

- **Optimization**
  - [L] **Improve HTML practices**
    - Use `<section>` instead of `<div>` where appropriate (semantic HTML).
    - Use `<picture>` instead of just `<img>`.
    - Convert background PNGs to WEBPs or JPGs.
    
  - [L] **Improve CSS practices**
    - Replace literal values with variables.
    - Use relative units instead of absolute units (px) to solve scaling problems.
    - Prefer inline and block or left/right and top/bottom over inline-start/inline-end and block-start/block-end to improve accessibility.

  - [H] **Improve documentation**
    - Open door in README (include class/code diagrams, tool: PlantUML).
    - Add file headers.
    - Document the CI/CD pipeline.

  - [L] **Improve text accessibility**
    - Ensure all text meets WCAG standards for accessible text.