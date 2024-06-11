# Sprint 3 Workplan / Sprint 2 Retrospective

## Miscellaneous Notes

- Risk analysis: CSE 120, lapses in communication.
- New task/issue ideas: .prettier update, reformatting display for Zodiac love compatibility output.
- Give Monday/Wednesday/Friday updates, even if it’s “none”.
- Localization for other languages: Japanese, Russian; use DeepL for other languages (like Spanish).
- For Dony and Bill’s features: create new resulting branch from individual branches before merging with main.

## Last Week’s Progress & Velocity (05/10-05/16)

- Julia: 3 hours = 0.6 velocity.
  - Task: File headers.
  - Ran into whitespace file issue with HTML JSON files & took a while to decide the best block comment format is.
- Henry: 0 hours.
- Iris: 2.5/5 hours = 0.5
  - Task: Fix the open cookie button.
  - Task [some kind of complete]: Start implementing the code of fixing the open cookie button.
- Arnav: 0/3 hours
  - Had a busy week with other classes, so was not able to contribute to the project. Will make up for it in the upcoming week/sprint.
- Holden:
  - Task: [completed] No JS notification to users.
- Bill: 1.5/3 hours = 0.5
  - Task: Proof of concept for a method of internationalization that is not invasive to current code.
- Emily: ⅗ tasks: familiarize with codebase and JavaScript, reviewed docs and online resources, as well as CI/CD pipeline.
- Dony: ⅖ = 0.4

  - Task:

- JD: 2/4 hours = 0.5
  - Task: Adding background music to the app.

## Upcoming Tasks & Hour Estimates (05/17-05/23)

- Julia: 5 hours
  - Task: Fix formatting for love compatibility predictions to be more easily readable, rather than a block of text. Potentially use text to speech for this in the future?
  - Task: Add button prompt showing “How to Use” all pages. Will do my best to wait until Bill’s localization changes are pushed.
- Henry: 4 hours
  - Task: Add Japanese to i18n.
- Iris: 5 hours
  - Task: Finish fixing the open cookies button.
  - Task: Start on adding the website setting. For example: adjust the font size, turn off the website background music…
- Arnav: 3 hours
  - Hoping to help tackle a task fully, while also finding other things I can work on.
  - Task: Help with new reformatting.
  - Task: Find more features to improve/implement.
- Holden:
  - Task: make the app into a PWA.
- Bill: (?) hours
  - Keep integrating internationalization features.
- Joseph: (?) hours
  - Keep working on animation fix.
- Emily: 3 hours
  - New task, yet to decide which.
- JD: 3 hours
  - Task: Add background music.
  - Task: Add controls for music.
- Dony: (?) hours
  - Complete Settings, integrating with internationalization.

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
