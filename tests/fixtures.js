export const showHide = `<div x-data="{ show: false }">
  <button @click="show = !show">
    Toggle
  </button>
  <div x-show="show">
    Can be toggled
  </div>
</div>`;

export const arrowFuncs = `<div
  x-data="{ show: false }"
  x-init="$watch('show', (val) => console.log(val))"
>
  <button x-on:click="show = !show">
    Toggle
  </button>
</div>`;
