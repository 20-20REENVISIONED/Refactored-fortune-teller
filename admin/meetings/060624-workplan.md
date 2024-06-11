# Workplan / Sprint 5 Retrospective

## Miscellaneous Notes

- ADRs for major features
- Unable to make final (b/c ring ceremony)
- Ask Bill if is able to do love compatibility
- Aim to finish on Saturday night or Sunday morning/afternoon

## Last Week’s Progress & Velocity (05/31-06/06)

- Julia: 3 hours
  - Task: Bug fixes/change in position for “How To” buttons for fortune teller and palm reading pages; currently running into issues with other elements being moved around and not fitting on the screen properly.
- Henry: 6 hours
  - Task: Merge settings branch and main to background music branch (b96837d5a4cad148e2003c60653d3b1ecea1615d and previous commit).
  - Task: Properly integrate settings branch into i18n branch (2e3ebce78e8c14c860bd103ba236b4f2e81f7a43).
  - Task: Bug fixes in the i18n branch (d7c68b0258f350c5589d3b26614ec09f1083bdb7 and surrounding commits).
  - Task: Put Holden’s noscript popup into the settings page (a28f1370bd61e9d5317408821dee0ad24497fbda).
- Iris: 5 hours
  - Task: Fix the open cookie button.
  - Task: Try to fix the Junit test case on the GitHub.
- Arnav: 1/3 hours = 0.3 velocity
  - Task: Looked for task to find, decided it was not worth starting a new task at this point.
  - Task: Refined settings page.
  - Task: Finalizing settings page and work on merging/compiling final project.
- Holden: (?) hours
  - Task: Optimizations.
  - Task: Did some ad-hoc testing with throttling and found website is generally performant enough.
  - Task: Wrote minal questions + compiled final draft.
- Bill: (?) hours
  - Task: Internationalization.
- Joseph: 5 hours
  - Task: Implemented the new LifePath calculator feature.
  - Task: Fixed the navigation menu to accommodate the new LifePath calculator feature.
  - Task: Edited the sizing of the navigation menu for improved layout and usability.
  - Task: Added the required animation delay to conform with the existing animation style.
  - Task: Added new HTML elements to the homepage.
  - Task: Included a newly added card container and image.
  - Task: Ensured image compatibility with required webp and avif file formats.
- Emily: 3-4 hours = 0.7 velocity
  - Task: Minal questions.
  - Task: File headers/doc.
  - Task: Clarify messages.
- Dony: 2/3 hours = 0.3 velocity
  - Task: Finalize feedback page and everything.
- JD: 4/4 hours = 1 velocity
  - Task: Added keyboard controls for the love compatibility feature.

### 🕜 Backlog
- [L] Setup of a CI/CD pipeline that automatically flattens HTML, CSS, and JavaScript files into one HTML file to reduce ping-ponging (latency). Maybe use something like [this](https://github.com/remy/inliner).
- [L/M] {uncertainty: high} Add a fortune-telling feature that uses ChatGPT to generate a response for the user & implement/configure a backend for managing ChatGPT calls [#8](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/8).
- [L] Fix poor practices in HTML (use of `<div>` over `<section>`, no usage of `<picture>`, just `<img>`, background PNG -> WEBPs, JPGs).
- [L] Fix poor CSS practices (use of literal values instead of `var`, usage of absolute units (px) in CSS instead of relative units (scaling problem), usage of `width` and `height` instead of `inline` and `block` or `left/right` and `top/bottom` instead of `inline-start/inline-end` and `block-start/block-end` (accessibility problem)) [#15](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/15).
- [L — leave for later] Some text does not meet WCAG standards for accessible text.
- [M] Fix the audio that does not work [#6](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/6). Fortune-cookie reading; test whether voices work across different devices/OS.

### ➡️ In-Progress

### ✅ Done
- [L] {uncertainty: high} Add the opening animation (CSS animation?) [#10](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/10).
- [H, Easy] Notify users with JavaScript off that the site will not work (Probably a `<noscript>` tag). [#2](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/2).
- [H] Add a setting that allows the user to change things [#11](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/11). {uncertainty: low}
  - Language change.
  - Change or disable/enable music.
  - Theme/color background (can match system light/dark mode system).
  - User feedback option (look into Google Analytics).
  - Reference user’s font settings/Increase font size.
- [L] Fix skip animation button is intermittently broken. Occurs when opening cookie several times (potentially asynchronous call issue; reproduce by adding timeout calls to experiment with different event ordering). Fix skipping animation in Fortune Cookie also means the text-to-speech is skipped.
- [M] {uncertainty: high} Setup to allow the site to be translated into various languages (maybe CI/CD pipeline that spits out an en folder, zh folder by reading localization overrides) [#7](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/7). Support the usage of different [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) for applicable languages.
- [L] Add some background music when we take some actions on the website [#9](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/9). {uncertainty: high} Could use voice recognition API (target music by age) and/or Suno (music generation).
- [L] {uncertainty: high} Add voiceover via text-to-speech for portions of the website.
- [L] Optimization [#7](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/7).
- [H — first step] Improve the documentation: [#1](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/1). Open door in README (incl. class/code diagrams — tool: PlantUML), file headers, CI/CD pipeline.
- [H/M] Fix the open cookie button not being visible on an iPhone SE3 if it's in landscape [#3](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/3). May be a flexbox-related issue.
- [M] {uncertainty: low} Make site installable as a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) with offline access [#4](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/4).