# Sprint 4 Workplan / Sprint 3 Retrospective

## Miscellaneous Notes

N/A

## Last Week’s Progress & Velocity (05/17-05/23)

- Julia: 3 hours = 0.6 velocity
  - Task: File headers
  - Ran into whitespace file issue with HTML JSON files & took a while to decide the best block comment format is.
- Henry: 5 hours
  - Task: Add picture tag and JPEG, WebP, and AVIF images.
  - Started some Japanese translations.
  - Fixed bug in i18n branch where testing failed.
- Iris: 3/5 hours = 0.6 velocity
  - Task: Finish fixing the open cookie button.
- Arnav: 4/3 hours
  - Finished implementation of a frontend for the settings page. This includes a volume slider, language select (which is currently empty until we finalize the languages we plan on translating), and a feedback button. These buttons match the style and conventions of the home page.
- Holden:
  - Task: [dropped] PWA
  - Task: Optimizations.
- Bill: 1.5/3 hours = 0.5 velocity
  - Task: Proof of concept for a method of internationalization that is not invasive to current code.
- Emily: ⅗ tasks
  - Task: JS docs.
  - Task: CI/CD pipeline and latency.
- Dony: ⅖ tasks = 0.4 velocity
  - Task: 
- JD: 2/4 hours = 0.5 velocity
  - Task: Adding background music to the app.

## Upcoming Tasks (05/24-05/31)

- Julia: 5 hours
  - Task: Fix formatting for love compatibility predictions to be more easily readable, rather than a block of text. Potentially use text to speech for this in the future?
  - Task: Add button prompt showing “How to Use” all pages. Will do my best to wait until Bill’s localization changes are pushed.
- Henry: 6 hours
  - Task: Preferences backend (connect things and make settings persistent), finish JP translation.
- Iris: 5 hours
  - Task: Fix the open cookie button (last version I fixed does not work correctly).
  - Task: Add traditional Chinese translation to the website.
- Arnav: 3 hours
  - Task: Improving functionality of settings page (add more buttons or implement backend). Need to research how to implement the backend if I end up being responsible for this.
- Holden: (?) hours
  - Task: Optimizations.
- Bill: (?) hours
  - Task: Keep integrating internationalization features.
- Joseph: (?) hours
  - Task: Keep working on animation fix.
- Emily: 3-4 hours
  - Task: Background audio.
  - Task: Work on latency.
  - Task: Working on compatibility messages formatting and readability.
- JD: 3 hours
  - Task: Add background music.
  - Task: Add controls for music.
- Dony: 3 hours
  - Task: Complete settings, integrating with internationalization.

## Project Progress

The format for entries will contain the estimated priority, as well as difficulty and uncertainty (where we have realistically estimated it), preceding the issue description, where the priority is represented as follows:  
H: High  
M: Medium  
L: Low

### 🕜 Backlog
- [L] Setup of a CI/CD pipeline that automatically flattens HTML, CSS, and JavaScript files into one HTML file to reduce ping-ponging (latency). Maybe use something like [this](https://github.com/remy/inliner).
- [L/M] {uncertainty: high} Add a fortune-telling feature that uses ChatGPT to generate a response for the user & implement/configure a backend for managing ChatGPT calls [#8](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/8).
- [L] Fix skip animation button is intermittently broken. Occurs when opening cookie several times (potentially asynchronous call issue; reproduce by adding timeout calls to experiment with different event ordering). Fix skipping animation in Fortune Cookie also means the text-to-speech is skipped.
- Optimization [#7](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/7).
- [L] Fix poor practices in HTML (use of `<div>` over `<section>`, no usage of `<picture>`, just `<img>`, background PNG -> WEBPs, JPGs).
- [L] Fix poor CSS practices (use of literal values instead of `var`, usage of absolute units (px) in CSS instead of relative units (scaling problem), usage of `width` and `height` instead of `inline` and `block` or `left/right` and `top/bottom` instead of `inline-start/inline-end` and `block-start/block-end` (accessibility problem)) [#15](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/15).
- [L — leave for later] Some text does not meet WCAG standards for accessible text.

### ➡️ In-Progress
- [H — first step] Improve the documentation: [#1](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/1). Open door in README (incl. class/code diagrams — tool: PlantUML), file headers, CI/CD pipeline.
- [H/M] Fix the open cookie button not being visible on an iPhone SE3 if it's in landscape [#3](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/3). May be a flexbox-related issue.
- [M] {uncertainty: low} Make site installable as a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) with offline access [#4](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/4).
- [M] Fix the audio that does not work [#6](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/6). Fortune-cookie reading; test whether voices work across different devices/OS.
- [L] Add some background music when we take some actions on the website [#9](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/9). {uncertainty: high} Could use voice recognition API (target music by age) and/or Suno (music generation).
- [M] {uncertainty: high} Setup to allow the site to be translated into various languages (maybe CI/CD pipeline that spits out an en folder, zh folder by reading localization overrides) [#7](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/7). Support the usage of different [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) for applicable languages.
- [L] {uncertainty: high} Add voiceover via text-to-speech for portions of the website.
- Add a setting that allows the user to change things [#11](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/11). {uncertainty: low}
  - Language change.
  - Change or disable/enable music.
  - Theme/color background (can match system light/dark mode system).
  - User feedback option (look into Google Analytics).
  - Reference user’s font settings/Increase font size.

### ✅ Done
- [L] {uncertainty: high} Add the opening animation (CSS animation?) [#10](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/10).
- [H, Easy] Notify users with JavaScript off that the site will not work (Probably a `<noscript>` tag). [#2](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/2).
