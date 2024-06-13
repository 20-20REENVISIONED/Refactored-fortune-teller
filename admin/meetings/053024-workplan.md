# Sprint 5 Workplan / Sprint 4 Retrospective

## Miscellaneous Notes

- Risk for time availability: minal (preparation and question creation).
- ADRs for major features.

## Last Week’s Progress & Velocity (05/24-05/30)

- Julia: 4 hours = {velocity}
  - Task: Initial “How to Use” button addition.
- Henry: 6 hours = {velocity}
  - Task: Add WebP and AVIF images into Joseph’s branch (f7f76d5d0df432ef18a7bc47b4f1721585e26ddd).
  - Task: Merge main into Joseph’s branch (cbc4c78b0fc476ddfb1a13d4059e288ab55fd98a).
  - Task: Fix failed Jest test in Joseph’s branch (b24b052acc198f47e7177486dd22a2bc1bce5859).
  - Task: Settings page backend (8b8269fed11daf68d3ddcd992cf16cb1310f7a03).
- Iris: 9 hours = {velocity}
  - Task: Add traditional Chinese translation to the website.
  - Task: Worked on the minal questions.
- Arnav: 2/3 hours = 0.66 velocity
  - Task: Worked on completing minal questions.
  - Task: Looking for tasks to help on.
  - Task: Going to either help with settings page or anything else that needs to be done.
  - Task: Maybe share on social media feature?
- Holden: \_\_ hours = {velocity}
  - Task: Optimizations.
  - Task: Did some ad-hoc testing with throttling and found website is generally performant enough.
  - Task: Wrote minal questions + compiled final draft.
- Bill: \_\_ hours = {velocity}
  - Task:
- Joseph: \_\_ hours = {velocity}
  - Task:
- Emily: 3-4 hours = 0.7 velocity
  - Task: Minal questions.
  - Task: File headers/doc.
  - Task: Clarify messages.
- Dony: \_\_ hours = {velocity}
  - Task:
- JD: 3/4 hours = 0.75 velocity
  - Task: Worked on the minal questions.

## Tasks & Hour Estimates (05/31-06/06)

- Julia: 4 hours
  - Task: Finish adding “How to Use” buttons.
  - Task: Exam annotation.
  - Task: Once done, help Holden look into social media sharing options.
- Henry: (?) hours
  - Task: Help with putting i18n into main.
- Iris: 5 hours
  - Task: Finish fixing the open cookie button.
- Arnav: 3 hours
  - Task: Find a task to work on.
  - Task: Work on above task.
- Holden: (?) hours
  - Task: Look into adding “share on social media” feature.
  - Task: Grade minal question.
- Bill: (?) hours
  - Task: Continue working on internationalization.
- Joseph: (?) hours
  - Task: Continue fixing animations.
- Emily: 3-4 hours
  - Task: Continue doc.
  - Task: Look at PWA.
- JD: 4 hours
  - Task: Implement music with barba.js.
- Dony: (?) hours
  - Task: Keep working on settings.

## Project Progress

The format for entries will contain the estimated priority, as well as difficulty and uncertainty (where we have realistically estimated it), preceding the issue description, where the priority is represented as follows:  
H: High  
M: Medium  
L: Low

### 🕜 Backlog

- [L] Setup of a CI/CD pipeline that automatically flattens HTML, CSS, and JavaScript files into one HTML file to reduce ping-ponging (latency). Maybe use something like [this](https://github.com/remy/inliner).
- [L/M] {uncertainty: high} Add a fortune-telling feature that uses ChatGPT to generate a response for the user & implement/configure a backend for managing ChatGPT calls [#8](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/8).
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
- [L] Fix skip animation button is intermittently broken. Occurs when opening cookie several times (potentially asynchronous call issue; reproduce by adding timeout calls to experiment with different event ordering). Fix skipping animation in Fortune Cookie also means the text-to-speech is skipped.
- [L] Optimization [#7](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/7).
- [H] Add a setting that allows the user to change things [#11](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/11). {uncertainty: low}
  - Language change.
  - Change or disable/enable music.
  - Theme/color background (can match system light/dark mode system).
  - User feedback option (look into Google Analytics).
  - Reference user’s font settings/Increase font size.

### ✅ Done

- [L] {uncertainty: high} Add the opening animation (CSS animation?) [#10](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/10).
- [H, Easy] Notify users with JavaScript off that the site will not work (Probably a `<noscript>` tag). [#2](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/2).
