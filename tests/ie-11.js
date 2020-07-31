import {test} from 'uvu';
import * as assert from 'uvu/assert';
import run from './run';
import {showHide, arrowFuncNoThis, arrowFuncThis} from './fixtures';

test('defaults to IE11', async () => {
  assert.equal(await run(showHide), await run(showHide, {targets: {ie: '11'}}));
});

test('IE11 keeps simple toggle', async () => {
  assert.snapshot(
    await run(showHide, {targets: {ie: '11'}}),
    `<div x-data="{
  show: false
};">
  <button @click="show = !show;">
    Toggle
  </button>
  <div x-show="show;">
    Can be toggled
  </div>
</div>`
  );
});

test('IE11 - arrow functions no `this`', async () => {
  assert.snapshot(
    await run(arrowFuncNoThis, {targets: {ie: '11'}}),
    `<div x-data="{
  show: false
};" x-init="$watch('show', function (val) {
  return console.log(val);
});">
  <button x-on:click="show = !show;">
    Toggle
  </button>
</div>`
  );
});

test('IE11 - arrow functions with `this`', async () => {
  assert.snapshot(
    await run(arrowFuncThis, {targets: {ie: '11'}}),
    `<div x-data="{
  show: false
};" x-init="var _this = this;

$nextTick(function () {
  _this.show = true;
});">
  <button x-on:click="show = !show;">
    Toggle
  </button>
</div>`
  );
});

test.run();
