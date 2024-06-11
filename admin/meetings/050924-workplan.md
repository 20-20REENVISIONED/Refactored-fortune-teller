# Sprint 2 Workplan / Sprint 1 Retrospective

## Miscellaneous Notes

- Git branching: name according to kind of branch/specifics. E.g. “feat/i18n”, “fix/my_bug”. For issues, mention the commit in the comments.
- Arnav volunteered to spearhead GitHub issues (e.g. minimize version conflicts).
- Stand-ups: every other day (Monday/Wednesday/Friday) – message in stand-up channel.

### New channels

- work-plan
- help

### New issue ideas

- User Documentation (add “How to Use” buttons on pages where that’s not already a button).
- Do runtime testing/messages for.

## Last Week’s Progress & Velocity (05/02-05/09)

- Julia: ⅗ hours = 0.6
  - Task: Documentation generation (README, file headers).
- Henry: 5 hours.
  - Added some basic getting started on the README.md (f34294cdab929c9562c42d630406215d8535a749).
  - Helped with migration from forking by replacing URLs (6bfed8a3ace781a20bbd33cb67af52b9d8449fba).
  - Updated packages with security vulnerabilities (0a21a5c50d9590164c9617d7804f0b27a48cab40).
  - Finished documentation of the CI/CD pipeline. Documentation has been put on the Github Wiki.
  - Fixed some important problems regarding the pipeline, mainly that testing only ran after Github pages deployment and on the live website (7c373a54d70d11779b31e8b9ee55f2fb4f8ce885).
  - Also fixed the docs script in package.json (42f808b0d014029ce01a955615b3d009f139a600).
- Iris: ⅖ hours = 0.4
  - Task: Fix the open cookie button.
  - Task: Do some research on how to implement it.
- Arnav: 1.5hrs/4 = .375
  - Spent some initial time understanding JavaScript documentation as well as file structure of our project.
  - Read over the code base as well as tried to pinpoint which files to modify for my task.
  - Also aiming to find more things to actively work on.
  - Planning to spend more time this next week with actual implementation of features/completing issues.
  - Task: No JS notification to users.
  - Task: Asking Powell/TA about our unknowns.
  - Future Task: Being in charge of git (looking over pull requests and monitoring branching, making sure nothing is lost in conflict).
- Holden: 2.5/5 hours = 0.5
  - Task: No JS notification to users.
  - Task [complete]: Write up sprint items as issues.
- Bill: 1.5/3 hours = 0.5
  - Task: Proof of concept for a method of internationalization that is not invasive to current code.
- Joseph: 5 Hours
  - Added animations to the home page.
  - Including animation to bring the card containers elements onto the screen.
  - Animation upon selecting the randomize button.
  - Setup GitHub Organization and transferred ownership to the organization rather than my own personal fork.
- Emily: ⅗ tasks: familiarize with codebase and JavaScript, reviewed docs and online resources, as well as CI/CD pipeline.
- Dony: ⅖ = 0.4
  - Task: Be familiar with the structure of the code design the structure of the new features on how they are put together.
- JD: 2/4 hours = 0.5
  - Task: Adding background music to the app.

## Tasks & Hour Estimates (05/10-05/17)

- Julia: 5 hours
  - Task: Complete file headers and README documentation; hopefully start on creating buttons displaying instructions for usage on each page where we don't already have them.
- Henry: 5 hours
  - Task: Continue CI/CD pipeline work
- Iris: 5 hours
  - Task: Start implementing(coding) the task which is fixing the open cookie button.
  - Task: Keep doing some research during coding time.
- Arnav: 4 hours
  - Keep working on same issue.
- Holden: 5 hours
  - Task: No JS notification to users.
- Bill:
  - Task: Generate en.json for all English strings.
- Joseph: 5 Hours
  - Work on updating the UI using anime.js (I think this is the library I am going to use).
- Emily: 4- hours
  - Keep working on same issue.
- JD: 4 hours
  - Keep working on same issue.

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
- [H, Easy] Notify users with JavaScript off that the site will not work (Probably a `<noscript>` tag). [#2](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/issues/2).
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