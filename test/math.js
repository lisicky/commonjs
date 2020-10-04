require('../common.js');

QUnit.module('Math tests');

QUnit.test('Clamp a value', assert => {
  assert.equal(Math.clamp(2.5, 1, 2), 2);
});
