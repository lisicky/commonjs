const { vec } = require('../common.js');

QUnit.module('Vector tests');

QUnit.test('Scale a vector', assert => {
  assert.deepEqual(vec.mul(vec(2, 3), 2), { x: 4, y: 6 });
});
