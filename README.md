#common.js

---

A small library of useful functions

* [vec](#vec)
* [mat](#mat)
* [Math](#Math)
* [Array](#Array)

---

#vec

A small 2d vector library

###`vec(a?, b?)`
Create a new vector

```
let a = vec(3, 2);  // (3, 2)
let b = vec(4);     // (4, 4)
let c = vec(a);     // (3, 2)
let d = vec();      // (0, 0)
```

###`vec.components(vec a)`
Get the components of a vector as an array

###`vec.ux()`
Return a unit vector (1, 0)

###`vec.uy()`
Return a unit vector (0, 1)

###`vec.add(vec a, vec b)`
Return a + b

###`vec.mul(vec a, scalar b)`
Return a * b

###`vec.sub(vec a, vec b)`
Return a - b

###`vec.len(vec a)`
Get the length of a vector

###`vec.manhattan(vec a)`
Get the length of a vector using taxicab geometry

###`vec.nor(vec a)`
Return a normalized vector

###`vec.dot(vec a, vec b)`
Return a ∙ b

###`vec.rot(vec a, scalar r)`
Return vector a rotated by r radians

###`vec.eq(vec a, vec b)`
Check if two vectors are equal

###`vec.rad(vec a)`
Get the angle of a vector in radians

###`vec.cpy(vec a)`
Create a copy of a vector

###`vec.map(vec a, function f)`
Call a function on each component of a vector and return the result

###`vec.str(vec a, string s?)`
Get the string representation of a vector. Default separator is `', '`

---

#mat

A small matrix library

###`mat(int m?, int n?, array entries?)`
Create a new matrix. Default size is 4x4

###`mat.identity(int n)`
Get an identity matrix of size n

###`mat.get(matrix a, int i, int j)`
Get the *ij*th value from a matrix 

###`mat.set(matrix a, int i, int j, v)`
Set the *ij*th value in a matrix

###`mat.row(matrix a, int m)`
Get the *m*th row from a matrix

###`mat.col(matrix a, int n)`
Get the *n*th column from a matrix

###`mat.add(matrix a, matrix b)`
Return a + b

###`mat.sub(matrix a, matrix b)`
Return a - b

###`mat.mul(matrix a, matrix b)`
Return ab

###`mat.scale(matrix a, scalar b)`
Return a * b

###`mat.trans(matrix a)`
Return a transposed matrix

###`mat.minor(matrix a, int i, int j)`
Return the *ij*th minor of a matrix

###`mat.det(matrix a)`
Get the determinant of a matrix

###`mat.nor(matrix a)`
Return a normalized matrix

###`mat.adj(matrix a)`
Get an adjunct matrix

###`mat.inv(matrix a)`
Get an inverse matrix

###`mat.eq(matrix a, matrix b)`
Check if two matrices are equal

###`mat.cpy(matrix a)`
Create a copy of a matrix

###`mat.map(matrix a, function f)`
Call a function on every element of a matrix and return the result

###`mat.str(matrix a, string s?)`
Get a string representation of a matrix. The default separator is `' '`

---

#Math

Some useful math functions

###`Math.floatEquals(a, b, p?)`
Check if two floats are approximately equal. Default precision is `Number.EPSILON`

###`Math.clamp(a, min, max)`
Clamp a number between min and max

###`Math.frac(a)`
Get the fractional part of a number

###`Math.lerp(a, b, i)`
Do a linear interpolation between a and b

###`Math.unlerp(a, b, i)`
Get the position of i between a and b

###`Math.blerp(c00, c10, c01, c11, ix, iy)`
Do a bilinear interpolation

###`Math.remap(i, a1, a2, b1, b2)`
Re-map a number i from range a1...a2 to b1...b2

###`Math.smoothstep(a, b, i)`
Do a smooth interpolation between a and b

###`Math.radians(degrees)`
Get an angle in radians

###`Math.degrees(radians)`
Get an angle in degrees

###`Math.randomBetween(min, max)`
Get a random float between min and max (exclusive max)

###`Math.randomIntBetween(min, max)`
Get a random integer between min and max (inclusive max)

###`Math.cltRandom(mu, sigma, samples)`
Get a normally-distributed random number

###`Math.cltRandomInt(min, max)`
Get a normally-distributed random integer between min and max

###`Math.weightedRandom(w)`
Return a weighted random index integer. `w` should be an array of weights

###`Math.lerpArray(a, i)`
Return an interpolated value from an array. `a` should be an array of numbers, and `i` should be between 0 and 1

###`Math.dot(a, b)`
Get the dot product of two vectors. `a` and `b` should be arrays of numbers

---

#Array

Some useful array functions

###`Array.times(function f, int n)`
Return a new array with length n by calling function `f(i)` on each element

###`Array.range(n)`
Return an array containing numbers 0...n - 1

###`Array.prototype.at(int i)`
Return the *i*th element of an array, with positive and negative wrapping

###`Array.prototype.chunk(int n)`
Chop an array into chunks of size n

###`Array.prototype.shuffle()`
Randomly shuffle an array
