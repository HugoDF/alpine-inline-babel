# Alpine.js Inline Babel

Run Babel on inline Alpine.js directive code.

## Installation

alpine-inline-babel is a PostHTML plugin.

You can install it as follows (ignore `posthtml` & `@babel-*` if they're already installed).

```sh
npm install --save-dev alpine-inline-babel @babel/core @babel/preset-env posthtml
# or
yarn add --dev alpine-inline-babel  @babel/core @babel/preset-env posthtml
```

## Usage

```js
const posthtml = require('posthtml');
const inline = require('alpine-inline-babel');

// `targets` is babel-preset-env targets,
// see https://babeljs.io/docs/en/babel-preset-env#targets
posthtml([inline({targets: {ie: '11'}})])
  .process(
    `<div x-data="{ show: false }">
  <button @click="show = !show">
    Toggle
  </button>
  <div x-show="show">
    Can be toggled
  </div>
</div>`
  )
  .then(({html}) => {
    // Do something with the HTML
    console.log(html);
  });
```


## Requirements

- Node 10
- Yarn 1.x or npm

## Setup

1. Clone the repository
2. Run `yarn` or `npm install` installs all required dependencies.

## npm scripts

> Equivalent `npm run <script>` should also work

- `yarn test` will run tests with uvu
- `yarn lint` will lint all of the files with [xo](https://github.com/xojs/xo)
- `yarn fmt` will run lint with `--fix` option on all the examples files (and tests).

## LICENSE

Code is licensed under the [MIT License](./LICENSE).

