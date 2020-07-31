export const showHide = `<div x-data="{ show: false }">
  <button @click="show = !show">
    Toggle
  </button>
  <div x-show="show">
    Can be toggled
  </div>
</div>`;

export const arrowFuncNoThis = `<div
  x-data="{ show: false }"
  x-init="$watch('show', (val) => console.log(val))"
>
  <button x-on:click="show = !show">
    Toggle
  </button>
</div>`;

export const arrowFuncThis = `<div
  x-data="{ show: false }"
  x-init="$nextTick(() => {
    this.show = true;
  })"
>
  <button x-on:click="show = !show">
    Toggle
  </button>
</div>`;
