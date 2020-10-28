require('../common.js');

QUnit.module('Math tests');

QUnit.test('Approximate value equality', assert => {
  assert.equal(Math.floatEquals(1 / 3, 0.3333333333333333), true);
});

QUnit.test('Clamp values', assert => {
  assert.equal(Math.clamp(-0.5), 0);
  assert.equal(Math.clamp(0.5), 0.5);
  assert.equal(Math.clamp(1.5), 1);
  assert.equal(Math.clamp(0.5, 1, 2), 1);
  assert.equal(Math.clamp(1.5, 1, 2), 1.5);
  assert.equal(Math.clamp(2.5, 1, 2), 2);
});

QUnit.test('Fractional part of a number', assert => {
  assert.equal(Math.frac(1.5), 0.5);
  assert.equal(Math.frac(2), 0);
});

QUnit.test('Linear interpolation', assert => {
  assert.equal(Math.lerp(1, 2, 0.5), 1.5);
});

QUnit.test('Opposite of linear interpolation', assert => {
  assert.equal(Math.unlerp(1, 2, 1.5), 0.5);
});

QUnit.test('Bilinear interpolation', assert => {
  assert.equal(Math.blerp(1, 2, 3, 4, 0.5, 0.5), 2.5);
});

QUnit.test('Remapping a number from one range to another', assert => {
  assert.equal(Math.remap(3, 2, 4, 0, 10), 5);
});

QUnit.test('Smooth interpolation', assert => {
  assert.equal(Math.floatEquals(Math.smoothstep(0, 1, 0.2), 0.10400000000000002), true);
  assert.equal(Math.floatEquals(Math.smoothstep(0, 1, 0.5), 0.5), true);
  assert.equal(Math.floatEquals(Math.smoothstep(0, 1, 0.8), 0.8960000000000001), true);
});

QUnit.test('Convert degrees to radians', assert => {
  assert.equal(Math.radians(180), Math.PI);
});

QUnit.test('Convert radians to degrees', assert => {
  assert.equal(Math.degrees(Math.PI), 180);
});

QUnit.test('Random number in interval', assert => {
  const r = Math.randomBetween(0, 1);
  assert.equal(r >= 0 && r < 1, true);
});

QUnit.test('Random integer in interval', assert => {
  const r = Math.randomIntBetween(1, 10);
  assert.equal(r >= 1 && r <= 10 && Math.frac(r) === 0, true);
});

QUnit.test('Get a normally distributed random number', assert => {
  const r = Array.times(i => Math.cltRandom(), 100);
  const b = (new Array(10)).fill(0);
  for (let i of r) {
    b[Math.floor(i * 10)]++;
  }
  assert.equal(b[4] > b[0] && b[5] > b[9], true);
});

QUnit.test('Get a normally distributed random integer', assert => {
  const r = Array.times(i => Math.cltRandomInt(0, 9), 100);
  const b = (new Array(10)).fill(0);
  for (let i of r) {
    b[i]++;
  }
  assert.equal(b[4] > b[0] && b[5] > b[9], true);
});

QUnit.test('Get a weighted random integer', assert => {
  const r = Array.times(i => Math.weightedRandom([1, 3, 1]), 100);
  const b = (new Array(3).fill(0));
  for (let i of r) {
    b[i]++;
  }
  assert.equal(b[1] > b[0] && b[1] > b[2], true);
});

QUnit.test('Interpolate an array value', assert => {
  const a = [1, 2, 3];
  assert.equal(Math.lerpArray(a, 0), 1);
  assert.equal(Math.lerpArray(a, 0.25), 1.5);
  assert.equal(Math.lerpArray(a, 0.5), 2);
  assert.equal(Math.lerpArray(a, 0.75), 2.5);
  assert.equal(Math.lerpArray(a, 1), 3);
});

QUnit.test('Dot product of a vector', assert => {
  const a = [2, 3, 4];
  const b = [5, 6, 7];
  assert.equal(Math.dot(a, b), 56);
});

QUnit.test('Factorial of a number', assert => {
  const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
  for (let i = 0; i < factorials.length; i++) {
    assert.equal(Math.factorial(i), factorials[i]);
  }
});

QUnit.test('Combinations', assert => {
  assert.equal(Math.combination(3, 1), 3);
  assert.equal(Math.combination(3, 3), 1);
  assert.equal(Math.combination(10, 3), 120);
});

QUnit.test('Permutations', assert => {
  assert.equal(Math.permutation(3, 1), 3);
  assert.equal(Math.permutation(3, 3), 6);
  assert.equal(Math.permutation(10, 3), 720);
});
