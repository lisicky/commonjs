# commonjs
A collection of useful functions

* [Array.shuffle()](#shuffle)
* [Object.extend([deep], ...arguments)](#extend) ⇒ <code>Object</code>
* [Object.keys()](#keys) ⇒ <code>Array</code>
* [Array.findIndex(f)](#findIndex) ⇒ <code>Number</code>
* [String.trim()](#trim) ⇒ <code>String</code>
* [Math.clamp(a, [min], [max])](#clamp) ⇒ <code>Number</code>
* [Math.lerp(a, b, i)](#lerp) ⇒ <code>Number</code>
* [Math.quadraticInterpolate(a, b, c, i)](#quadraticInterpolate) ⇒ <code>Number</code>
* [Math.cubicInterpolate(a, b, c, d, i)](#cubicInterpolate) ⇒ <code>Number</code>
* [Math.radians(degrees)](#radians) ⇒ <code>Number</code>
* [Math.degrees(radians)](#degrees) ⇒ <code>Number</code>
* [Math.randomBetween(min, max)](#randomBetween) ⇒ <code>Number</code>
* [Math.randomIntBetween(min, max)](#randomIntBetween) ⇒ <code>Number</code>
* [Math.cltRandom(mu, sigma, samples)](#cltRandom) ⇒ <code>Number</code>
* [Math.cltRandomInt(min, max)](#cltRandomInt) ⇒ <code>Number</code>

<a name="shuffle"></a>
## Array.shuffle()
In-place array shuffle (using Fisher-Yates shuffle).

**Kind**: instance function of Array  
**Example**  
```js
existingArray.shuffle();
```

<a name="extend"></a>
## Object.extend([deep], ...arguments) ⇒ <code>Object</code>
In-place object extend, merges properties of all objects in the arguments list into
the target object. If the first argument is a boolean set to true, then do a deep extend
(recursively extends all sub-objects and their properties).

**Kind**: instance function of Object  
**Returns**: <code>Object</code> - The merged object.  

| Param | Type | Description |
| --- | --- | --- |
| [deep] | <code>Boolean</code> | If set to true, do a deep extend. |
| ...arguments | <code>Object</code> | The objects from which to merge properties (properties are merged from left to right). |

**Example**  
```js
// Demonstrates in-place usage
var existingObject = { a: 1, b: 1, c: { d: 1 } };
existingObject.extend(true, { a: 2, b: 2 }, { a: 3, c: { e: 1 } });
// existingObject is now { a: 3, b: 2, c: { d: 1, e: 1 } }
```
**Example**  
```js
// Demonstrates using the return value to create a new object
var newObject = {}.extend({ a: 1, b: 1, c: 1 }, { a: 2, b: 2 }, { a: 3, c: 2 });
// newObject is { a: 3, b: 2, c: 2 }
```

<a name="keys"></a>
## Object.keys() ⇒ <code>Array</code>
Get an object's keys as an array (this function might already exist in ES5
browsers).

**Kind**: instance function of Object  
**Returns**: <code>Array</code> - An array of keys contained in the object.  
**Example**  
```js
var keys = Object.keys(existingObject);
```

<a name="findIndex"></a>
## Array.findIndex(f) ⇒ <code>Number</code>
Find an element in an array using a callback (this function might already exist
in ES6 browsers).

**Kind**: instance function of Array  
**Returns**: <code>Number</code> - The matching element's index or -1 if no matching element was found.  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>[findIndexCallback](#findIndexCallback)</code> | A callback that will be called for each item in the array. |

**Example**  
```js
var foundIndex = existingArray.findIndex(function(value, index, array) { \/* ... *\/ });
```

<a name="findIndexCallback"></a>
## findIndexCallback ⇒ <code>Boolean</code>
**Kind**: global typedef  
**Returns**: <code>Boolean</code> - True if the current element is the one being searched for.  

| Param | Type | Description |
| --- | --- | --- |
| value |  | The value of the current element. |
| index | <code>Number</code> | The index of the current element. |
| array | <code>Array</code> | The array being searched. |


<a name="trim"></a>
## String.trim() ⇒ <code>String</code>
Trims whitespace from beginning/end of a string and returns the result.

**Kind**: instance function of String  
**Returns**: <code>String</code> - The trimmed string.  
**Example**  
```js
var trimmedString = existingString.trim();
```

<a name="clamp"></a>
## Math.clamp(a, [min], [max]) ⇒ <code>Number</code>
Clamps a value between min and max (or 0 and 1 respectively, if either argument is
undefined).

**Kind**: static function  
**Returns**: <code>Number</code> - The clamped value.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>Number</code> |  | The number to clamp. |
| [min] | <code>Number</code> | <code>0</code> | The minimum value. |
| [max] | <code>Number</code> | <code>1</code> | The maximum value. |

<a name="lerp"></a>
## Math.lerp(a, b, i) ⇒ <code>Number</code>
Does a linear interpolation from a to b.

**Kind**: static function  
**Returns**: <code>Number</code> - An interpolated value between a and b.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | The starting value. |
| b | <code>Number</code> | The finishing value. |
| i | <code>Number</code> | The interpolation value. |

<a name="quadraticInterpolate"></a>
## Math.quadraticInterpolate(a, b, c, i) ⇒ <code>Number</code>
Does a 1-dimensional quadratic interpolation from a (at i = 0) to c (at i = 1),
with b as the control offset.

**Kind**: static function  
**Returns**: <code>Number</code> - An interpolated value between a and c.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | The starting value. |
| b | <code>Number</code> | The control offset. |
| c | <code>Number</code> | The finishing value. |
| i | <code>Number</code> | The interpolation value. |

<a name="cubicInterpolate"></a>
## Math.cubicInterpolate(a, b, c, d, i) ⇒ <code>Number</code>
Does a 1-dimensional cubic interpolation from a (at i = 0) to d (at i = 1), with b
and c as the control offsets.

**Kind**: static function  
**Returns**: <code>Number</code> - An interpolated value between a and d.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Number</code> | The starting value. |
| b | <code>Number</code> | The first control offset. |
| c | <code>Number</code> | The second control offset. |
| d | <code>Number</code> | The finishing value. |
| i | <code>Number</code> | The interpolation value. |

<a name="radians"></a>
## Math.radians(degrees) ⇒ <code>Number</code>
Converts degrees to radians.

**Kind**: static function  
**Returns**: <code>Number</code> - A value in radians.  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>Number</code> | The value to convert to radians. |

<a name="degrees"></a>
## Math.degrees(radians) ⇒ <code>Number</code>
Converts radians to degrees.

**Kind**: static function  
**Returns**: <code>Number</code> - A value in degrees.  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>Number</code> | The value to convert to degrees. |

<a name="randomBetween"></a>
## Math.randomBetween(min, max) ⇒ <code>Number</code>
Returns a random float between min (inclusive) and max (exclusive).

**Kind**: static function  
**Returns**: <code>Number</code> - A random float.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum value (inclusive). |
| max | <code>Number</code> | The maximum value (exclusive). |

<a name="randomIntBetween"></a>
## Math.randomIntBetween(min, max) ⇒ <code>Number</code>
Return a random integer between min (inclusive) and max (inclusive).

**Kind**: static function  
**Returns**: <code>Number</code> - A random integer.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum value (inclusive). |
| max | <code>Number</code> | The maximum value (inclusive). |

<a name="cltRandom"></a>
## Math.cltRandom(mu, sigma, samples) ⇒ <code>Number</code>
Return a normally-distributed value (uses central limit theorem).

**Kind**: static function  
**Returns**: <code>Number</code> - A random float.  

| Param | Type | Description |
| --- | --- | --- |
| mu | <code>Number</code> | The mean value. |
| sigma | <code>Number</code> | The standard deviation. |
| samples | <code>Number</code> | The number of samples (ie. how shallow/steep the curve is, 1 is uniform). |

<a name="cltRandomInt"></a>
## Math.cltRandomInt(min, max) ⇒ <code>Number</code>
Return a normally-distributed integer between min (inclusive) and max (inclusive).

**Kind**: static function  
**Returns**: <code>Number</code> - A random integer.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The minimum value. |
| max | <code>Number</code> | The maximum value. |

