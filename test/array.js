require('../common.js');

QUnit.module('Array tests');

QUnit.test('Generate an array', assert => {
  assert.deepEqual(Array.times(i => i, 3), [0, 1, 2]);
});

QUnit.test('Create an array of integers', assert => {
  assert.deepEqual(Array.range(3), [0, 1, 2]);
});

QUnit.test('Zip arrays together', assert => {
  assert.deepEqual(Array.zip(['a', 'b', 'c'], [1, 2, 3]), [
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);
});

QUnit.test('Array value at wrapped index', assert => {
  const a = [1, 2, 3];
  assert.equal(a.at(0), 1);
  assert.equal(a.at(1), 2);
  assert.equal(a.at(2), 3);
  assert.equal(a.at(-1), 3);
  assert.equal(a.at(-2), 2);
  assert.equal(a.at(-3), 1);
  assert.equal(a.at(-4), 3);
  assert.equal(a.at(3), 1);
  assert.equal(a.at(4), 2);
});

QUnit.test('Chop an array into chunks', assert => {
  const a = Array.range(12);
  assert.deepEqual(a.chunk(3), [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ]);
  assert.deepEqual(a.chunk(4), [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ]);
  assert.deepEqual(a.chunk(5), [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11]
  ]);
});

QUnit.test('Shuffle an array', assert => {
  const a = Array.range(100).shuffle();
  assert.notEqual(a[0], 0);
});
