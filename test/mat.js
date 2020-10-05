const { mat } = require('../common.js');

QUnit.module('Matrix tests');

QUnit.test('Initialise a matrix', assert => {

  // Initialise with no arguments, should get a 4x4 matrix
  assert.deepEqual(mat(), {
    m: 4,
    n: 4,
    entries: [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]
  });

  // Initialise with size arguments, should get a 3x3 matrix
  assert.deepEqual(mat(3, 3), {
    m: 3,
    n: 3,
    entries: [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ]
  });

  // Initialise with all entries populated
  assert.deepEqual(mat(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]), {
    m: 3,
    n: 3,
    entries: [
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ]
  });

  // Initialise with some entries populated
  assert.deepEqual(mat(3, 3, [1, 2, 3]), {
    m: 3,
    n: 3,
    entries: [
      1, 2, 3,
      0, 0, 0,
      0, 0, 0
    ]
  });
});

QUnit.test('Identity matrix', assert => {

  // 2x2 identity matrix
  assert.deepEqual(mat.identity(2), {
    m: 2,
    n: 2,
    entries: [
      1, 0,
      0, 1
    ]
  });

  // 3x3 identity matrix
  assert.deepEqual(mat.identity(3), {
    m: 3,
    n: 3,
    entries: [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]
  });

  // 4x4 identity matrix
  assert.deepEqual(mat.identity(4), {
    m: 4,
    n: 4,
    entries: [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]
  });
});

QUnit.test('Get and set matrix entries', assert => {
  const a = mat(3, 3, Array.range(9));

  // Get
  assert.equal(mat.get(a, 1, 1), 0);
  assert.equal(mat.get(a, 3, 3), 8);

  // Set
  mat.set(a, 1, 1, 10);
  assert.equal(mat.get(a, 1, 1), 10);

  mat.set(a, 3, 2, 11);
  assert.equal(mat.get(a, 3, 2), 11);
});

QUnit.test('Get matrix rows/columns', assert => {
  const a = mat(4, 4, Array.range(16));

  // Rows
  assert.deepEqual(mat.row(a, 1), [0, 1, 2, 3]);
  assert.deepEqual(mat.row(a, 4), [12, 13, 14, 15]);

  // Columns
  assert.deepEqual(mat.col(a, 1), [0, 4, 8, 12]);
  assert.deepEqual(mat.col(a, 4), [3, 7, 11, 15]);
});

QUnit.test('Matrix addition', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix subtraction', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix multiplication', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix scalar multiplication', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix transposition', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix minor', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix determinant', assert => {
  assert.equal(1, 1);
});

QUnit.test('Normalised matrix', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix adjugate', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix inverse', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix equality', assert => {
  assert.equal(1, 1);
});

QUnit.test('Copy a matrix', assert => {
  assert.equal(1, 1);
});

QUnit.test('Mapping a matrix', assert => {
  assert.equal(1, 1);
});

QUnit.test('Matrix string conversion', assert => {
  assert.equal(1, 1);
});
