# Sprint 1 Workplan

## Miscellaneous Notes

- Sprints start Thursday

## Hour Estimates (05/02-05/09)

- Julia: 5-8 hrs (more if necessary)
- Henry: 5 hrs, maybe 10 if needed or interested and free
- Iris: 5 hours, can be a little bit more
- Arnav: 4-7 hours (but can do more if needed, can do more work now as opposed to later weeks)
- Holden: 5 hrs
- Bill: 3-10 hours (based on interest)
- Joseph: 5 hours
- Emily: ~4-7 hours this week
- JD: 4-6 hours, but can do more if necessary

## Tasks for First Sprint

- [H] [2 hours] Transcribe features into GitHub issues
- [H — first step] [8 hours] Improve the documentation:
  - Open door in README (incl. class/code diagrams — tool: PlantUML)
  - File headers
  - CI/CD pipeline
- [H, Easy] [5 hours] Notify users with JavaScript off that the site will not work (Probably a `<noscript>` tag).
- [H] Ask Powell questions about unknowns like language translation
- [H/M] [3 hours] Fix the open cookie button is not visible on an iPhone SE3 if it's in landscape
  - May be a flexbox-related issue
- [M] [7.5 hours] {uncertainty: low} Make site installable as a Progressive Web App with offline access
- [M] [next sprint] [? hours] {uncertainty: high} Setup to allow the site to be translated into various languages (maybe CI/CD pipeline that spits out an "en" folder, "zh" folder by reading localization overrides for text, alternatively can be done locally in JavaScript with a JSON containing localizations)
- [M, ] [10 hours?] Fix the audio that does not work
  - Fortune-cookie reading; test whether voices work across different devices/OS

## Project Progress

The format for entries will contain the estimated priority, as well as difficulty and uncertainty (where we have realistically estimated it), preceding the issue description, where the priority is represented as follows:  
H: High  
M: Medium  
L: Low  

### 🕜 Backlog
- [L] Setup of a CI/CD pipeline that automatically flattens HTML, CSS, and JavaScript files into one HTML file to reduce ping-ponging (latency). Maybe use something like [this](https://github.com/remy/inliner).
- [M] {uncertainty: high} Setup to allow the site to be translated into various languages (maybe CI/CD pipeline that spits out an en folder, zh folder by reading localization overrides) [#7](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/7). Support the usage of different [writing-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) for applicable languages.
- [L/M] {uncertainty: high} Add a fortune-telling feature that uses ChatGPT to generate a response for the user & implement/configure a backend for managing ChatGPT calls [#8](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/8).
- [L] Add some background music when we take some actions on the website [#9](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/9). {uncertainty: high} Could use voice recognition API (target music by age) and/or Suno (music generation).
- [L] {uncertainty: high} Add the opening animation (CSS animation?) [#10](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/10).
- [L] {uncertainty: high} Add voiceover via text-to-speech for portions of the website.
- Add a setting that allows the user to change things [#11](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/11). {uncertainty: low}
  - Language change.
  - Change or disable/enable music.
  - Theme/color background (can match system light/dark mode system).
  - User feedback option (look into Google Analytics).
  - Reference user’s font settings/Increase font size.
- [L] Fix skip animation button is intermittently broken. Occurs when opening cookie several times (potentially asynchronous call issue; reproduce by adding timeout calls to experiment with different event ordering). Fix skipping animation in Fortune Cookie also means the text-to-speech is skipped.
- Optimization [#7](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/7).
- [L] Fix poor practices in HTML (use of `<div>` over `<section>`, no usage of `<picture>`, just `<img>`, background PNG -> WEBPs, JPGs).
- [L] Fix poor CSS practices (use of literal values instead of `var`, usage of absolute units (px) in CSS instead of relative units (scaling problem), usage of `width` and `height` instead of `inline` and `block` or `left/right` and `top/bottom` instead of `inline-start/inline-end` and `block-start/block-end` (accessibility problem)) [#15](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/15).
- [L — leave for later] Some text does not meet WCAG standards for accessible text.

### ➡️ In-Progress
- [H — first step] Improve the documentation: [#1](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/1). Open door in README (incl. class/code diagrams — tool: PlantUML), file headers, CI/CD pipeline.
- [H, Easy] Notify users with JavaScript off that the site will not work (Probably a `<noscript>` tag). [#2](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/2).
- [H/M] Fix the open cookie button not being visible on an iPhone SE3 if it's in landscape [#3](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/3). May be a flexbox-related issue.
- [M] {uncertainty: low} Make site installable as a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) with offline access [#4](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/4).
- [M] Fix the audio that does not work [#6](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/6). Fortune-cookie reading; test whether voices work across different devices/OS.

### ✅ Done
