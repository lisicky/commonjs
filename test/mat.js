const { mat } = require('../common.js');

QUnit.module('Matrix tests');

QUnit.test('Invert a matrix', assert => {
  assert.deepEqual(mat.inv(mat(3, 3, [7, 2, 1, 0, 3, -1, -3, 4, -2])), {
    m: 3,
    n: 3,
    entries: [-2, 8, -5, 3, -11, 7, 9, -34, 21]
  });
});
