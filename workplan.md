# Team 14 Workplan

Week 6

## Sprints

- Sprints begin on Thursday and last for 1 week
- Every sprint we will have high priority tasks that we want to complete by the end of the sprint
- Once per sprint we will have a meeting to evaluate the team's progress and decide the tasks to complete for next week's sprint
- Team members can simply assign themselves an issue and begin working
- At least once per sprint everyone should post in the standup channel (at the next meeting we should decide more strict rules for when and how often this is required)

## Time Available

Hour Estimates (05/02-05/09):

- Julia: 5-8 hrs (more if necessary)
- Henry: 5 hrs, maybe 10 if (needed or interested) and free
- Iris: 5 hours can be a little bit more
- Arnav: 4-7 hours (but can do more if needed, can do more work now as opposed to later weeks)
- Holden: 5hrs
- Bill: 3-10 hours (based on interest)
- Joseph - 5 Hours
- Emily ~4-7 this week

## Tasks for First Sprint

1. [H] [2 hours] Transcribe features into github issues
2. [H — first step] [8 hours] Improve the documentation: [link](https://github.com/JosephBurger/fortune-teller/issues/1)
    - open door in README (incl. class/code diagrams — tool: PlantUML)
    - file headers
    - CI/CD pipeline
3. [H, Easy] [5 hours] Notify users with javascript off that the site will not work (Probably a noscript tag). [link](https://github.com/JosephBurger/fortune-teller/issues/2)
4. [H] Ask powell questions about unknown like language translation
5. [H/M] [3 hours] Fix the open cookie button is not visible on an iPhone SE3 if it's in landscape. [link](https://github.com/JosephBurger/fortune-teller/issues/3)
    - May be flexbox-related issue
6. [M] [7.5 hours] {uncertainty: low} Make site installable as a Progressive Web App with offline access. [link](https://github.com/JosephBurger/fortune-teller/issues/4)
7. [M] [next sprint] [? hours] {uncertainty: high} Setup to allow the site to be translated into various languages (maybe CI/CD pipeline that spits out a en folder, zh folder by reading localization. alternatively can be done locally in javascript with a json containing localizations) [link](https://github.com/JosephBurger/fortune-teller/issues/5)
    - Support the usage of different writing-mode for applicable languages.
8. [M, ] [10 hours?] Fix the audio that does not work. [link](https://github.com/JosephBurger/fortune-teller/issues/6)
    - fortune-cookie reading; test whether voices work across different devices/OS

### Priority

H = High, M = Medium, L = Low

## Plans for future sprints 💡

- [L] Setup of a CI/CD pipeline that automatically flattens html,css and javascript files into one file html file to reduce ping-ponging (latency). Maybe use something like [this](https://github.com/remy/inliner). [link to issue](https://github.com/JosephBurger/fortune-teller/issues/7)
- [L/M] {uncertainty: high} Add a fortune-telling feature that uses chatgpt to generate a response for the user. [link](https://github.com/JosephBurger/fortune-teller/issues/8)
  - Implement/configure a backend for managing chatgpt calls
- [L] Add some background music when we take some actions in the website { uncertainty: high }. [link](https://github.com/JosephBurger/fortune-teller/issues/9)
  - Could use voice recognition API (target music by age) and/or Suno (music generation)
- [L] {uncertainty: high} Add the opening animation (CSS animation?). [link](https://github.com/JosephBurger/fortune-teller/issues/10)
- Add a setting that allows the user to change things {uncertainty: low}
  - language change
  - change or disable/enable music
  - theme/color background (can match system light/dark mode system)
- user feedback option (look into Google Analytics)
- [L] Fix skip animation button is intermittently borked
  - Occurs when opening cookie several times (potentially asynchronous call issue; reproduce by adding timeout calls to experiment with different event ordering)
  - Fix skipping animation in Fortune Cookie also means the text-to-speech is skipped
- [L] Fix poor practices in HTML (use of div over section) {semantic HTML}
no usage of picture just img
  - Background PNG -> WEBPs, JPGs
- [L] Fix poor CSS practices (use of literal values instead of var, usage of absolute units (px) in CSS instead of relative units (scaling problem), usage of width and height instead of inline and block or left/right and top/bottom instead of inline-start/inline-end and block-start/block-end (accessibility problem))
- [L — leave for later] Some text does not meet WCAG standards for accessible text
