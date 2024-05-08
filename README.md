# Envision Your Destiny

Improving the student experience by alleviating decision-making anxiety. Brought to you by [20/20 Visionaries](./admin/team.md) (CSE 110 SP23 Team 20).

[![Try it out button](./docs/images/try-button.svg)](https://20-20reenvisioned.github.io/Refactored-fortune-teller/source/home-page/)
[![Documentation button](./docs/images/docs-button.svg)](https://20-20reenvisioned.github.io/Refactored-fortune-teller/JSDOCs/)
[![Team page button](./docs/images/team-page-button.svg)](./admin/team.md)

## Development

### Getting Started

You will need Node.js and npm for, among other things, running tests (Jest), JS statis code analysis (ESLint) and code formatting (Prettier). For installation instructions see [the official documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

After you've successfully installed Node.js and npm and verified installation, simply run the following to initialize npm for the project:

```sh
npm install
```

### Code Formatting

To run Prettier to format your code (and to make sure you earn that check-mark when you push to the Github repository), simply run the following:

```sh
npm run format
```

### Testing

By default, our test suite runs E2E tests on the live version of the site. To specify where your local version is, set the `BASE` environment variable. For example:

```sh
$ BASE=http://127.0.0.1:5502 npm test
```

If you have Python3 installed, you can start a simple http server to run the E2E tests by simply navigating to the repo root folder and then running:

```sh
python3 -m http.server
```

Then in a seperate window run:

```sh
BASE=http://127.0.0.1:8000 npm test
```

### Checking for JavaScript Problems

To check for any code quality or coding style issues using ESLint, just run the following:

```sh
npm run lint
```

## Additional Documentation

Additional documentation is available in the [wiki](https://github.com/20-20REENVISIONED/Refactored-fortune-teller/wiki).