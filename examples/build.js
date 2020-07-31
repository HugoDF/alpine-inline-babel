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
