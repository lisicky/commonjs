# common.js

A small library of useful functions

* [vec](#vec)
* [mat](#mat)
* [Math](#Math)
* [Array](#Array)

## Classes

<dl>
<dt><a href="#Math">Math</a></dt>
<dd></dd>
<dt><a href="#Array">Array</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#vec">vec([x], [y])</a> ⇒ <code><a href="#vec">vec</a></code></dt>
<dd><p>Create a new vector</p>
</dd>
<dt><a href="#mat">mat(m, n, entries)</a> ⇒ <code><a href="#mat">mat</a></code></dt>
<dd><p>Create a new matrix</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#vec">vec</a> : <code>Object</code></dt>
<dd><p>A 2d vector</p>
</dd>
<dt><a href="#vectorMapCallback">vectorMapCallback</a> ⇒ <code>number</code></dt>
<dd><p>A function to call on each component of a vector</p>
</dd>
<dt><a href="#mat">mat</a> : <code>Object</code></dt>
<dd><p>A matrix</p>
</dd>
<dt><a href="#matrixMapCallback">matrixMapCallback</a> ⇒ <code>number</code></dt>
<dd><p>A function to call on each entry of a matrix</p>
</dd>
<dt><a href="#interpolationCallback">interpolationCallback</a> ⇒ <code>number</code></dt>
<dd><p>An interpolation function</p>
</dd>
<dt><a href="#timesCallback">timesCallback</a> ⇒ <code>*</code></dt>
<dd><p>A function for generating array values</p>
</dd>
</dl>

<a name="Math"></a>

## Math
**Kind**: global class  

* [Math](#Math)
    * [.floatEquals(a, b, [p])](#Math.floatEquals) ⇒ <code>boolean</code>
    * [.clamp(a, min, max)](#Math.clamp) ⇒ <code>number</code>
    * [.frac(a)](#Math.frac) ⇒ <code>number</code>
    * [.lerp(a, b, i)](#Math.lerp) ⇒ <code>number</code>
    * [.unlerp(a, b, i)](#Math.unlerp) ⇒ <code>number</code>
    * [.blerp(c00, c10, c01, c11, ix, iy)](#Math.blerp) ⇒ <code>number</code>
    * [.remap(i, a1, a2, b1, b2)](#Math.remap) ⇒ <code>number</code>
    * [.smoothstep(a, b, i)](#Math.smoothstep)
    * [.radians(degrees)](#Math.radians) ⇒ <code>number</code>
    * [.degrees(radians)](#Math.degrees) ⇒ <code>number</code>
    * [.randomBetween(min, max)](#Math.randomBetween) ⇒ <code>number</code>
    * [.randomIntBetween(min, max)](#Math.randomIntBetween) ⇒ <code>number</code>
    * [.cltRandom(mu, sigma, samples)](#Math.cltRandom) ⇒ <code>number</code>
    * [.cltRandomInt(min, max)](#Math.cltRandomInt) ⇒ <code>number</code>
    * [.weightedRandom(w)](#Math.weightedRandom) ⇒ <code>number</code>
    * [.lerpArray(a, i, [f])](#Math.lerpArray) ⇒ <code>number</code>
    * [.dot(a, b)](#Math.dot) ⇒ <code>number</code>

<a name="Math.floatEquals"></a>

### Math.floatEquals(a, b, [p]) ⇒ <code>boolean</code>
Check if two numbers are approximately equal

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>number</code> |  |  |
| b | <code>number</code> |  |  |
| [p] | <code>number</code> | <code>Number.EPSILON</code> | The precision value |

<a name="Math.clamp"></a>

### Math.clamp(a, min, max) ⇒ <code>number</code>
Clamp a number between min and max

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> |  |
| min | <code>number</code> | The minimum value |
| max | <code>number</code> | The maximum value |

<a name="Math.frac"></a>

### Math.frac(a) ⇒ <code>number</code>
Get the fractional part of a number

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 

<a name="Math.lerp"></a>

### Math.lerp(a, b, i) ⇒ <code>number</code>
Do a linear interpolation between a and b

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> |  |
| b | <code>number</code> |  |
| i | <code>number</code> | The interpolation value |

<a name="Math.unlerp"></a>

### Math.unlerp(a, b, i) ⇒ <code>number</code>
Get the position of i between a and b

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| i | <code>number</code> | 

<a name="Math.blerp"></a>

### Math.blerp(c00, c10, c01, c11, ix, iy) ⇒ <code>number</code>
Do a bilinear interpolation

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| c00 | <code>number</code> | Top-left value |
| c10 | <code>number</code> | Top-right value |
| c01 | <code>number</code> | Bottom-left value |
| c11 | <code>number</code> | Bottom-right value |
| ix | <code>number</code> | Interpolation value along x |
| iy | <code>number</code> | Interpolation value along y |

<a name="Math.remap"></a>

### Math.remap(i, a1, a2, b1, b2) ⇒ <code>number</code>
Re-map a number i from range a1->a2 to b1->b2

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| i | <code>number</code> | 
| a1 | <code>number</code> | 
| a2 | <code>number</code> | 
| b1 | <code>number</code> | 
| b2 | <code>number</code> | 

<a name="Math.smoothstep"></a>

### Math.smoothstep(a, b, i)
Do a smooth interpolation between a and b

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>\*</code> |  |
| b | <code>\*</code> |  |
| i | <code>\*</code> | The interpolation value |

<a name="Math.radians"></a>

### Math.radians(degrees) ⇒ <code>number</code>
Get an angle in radians

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| degrees | <code>number</code> | The angle in degrees |

<a name="Math.degrees"></a>

### Math.degrees(radians) ⇒ <code>number</code>
Get an angle in degrees

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| radians | <code>number</code> | The angle in radians |

<a name="Math.randomBetween"></a>

### Math.randomBetween(min, max) ⇒ <code>number</code>
Get a random float in the interval [min, max)

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Inclusive min |
| max | <code>number</code> | Exclusive max |

<a name="Math.randomIntBetween"></a>

### Math.randomIntBetween(min, max) ⇒ <code>number</code>
Get a random integer in the interval [min, max]

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Inclusive min |
| max | <code>number</code> | Inclusive max |

<a name="Math.cltRandom"></a>

### Math.cltRandom(mu, sigma, samples) ⇒ <code>number</code>
Get a normally-distributed random number

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| mu | <code>number</code> | The mean value |
| sigma | <code>number</code> | The standard deviation |
| samples | <code>number</code> | The number of samples |

<a name="Math.cltRandomInt"></a>

### Math.cltRandomInt(min, max) ⇒ <code>number</code>
Get a normally-distributed random integer in the interval [min, max]

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Inclusive min |
| max | <code>number</code> | Inclusive max |

<a name="Math.weightedRandom"></a>

### Math.weightedRandom(w) ⇒ <code>number</code>
Return a weighted random integer

**Kind**: static method of [<code>Math</code>](#Math)  
**Returns**: <code>number</code> - An index from w  

| Param | Type | Description |
| --- | --- | --- |
| w | <code>Array.&lt;number&gt;</code> | An array of weights |

<a name="Math.lerpArray"></a>

### Math.lerpArray(a, i, [f]) ⇒ <code>number</code>
Return an interpolated value from an array

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>Array.&lt;number&gt;</code> |  | An array of values interpolate |
| i | <code>number</code> |  | A number in the interval [0, 1] |
| [f] | [<code>interpolationCallback</code>](#interpolationCallback) | <code>Math.lerp</code> | The interpolation function to use |

<a name="Math.dot"></a>

### Math.dot(a, b) ⇒ <code>number</code>
Get the dot product of two vectors

**Kind**: static method of [<code>Math</code>](#Math)  
**Returns**: <code>number</code> - a ∙ b  

| Param | Type |
| --- | --- |
| a | <code>Array.&lt;number&gt;</code> | 
| b | <code>Array.&lt;number&gt;</code> | 

<a name="Array"></a>

## Array
**Kind**: global class  

* [Array](#Array)
    * _instance_
        * [.at(i)](#Array+at) ⇒ <code>\*</code>
        * [.chunk(n)](#Array+chunk) ⇒ <code>Array.&lt;Array.&lt;\*&gt;&gt;</code>
        * [.shuffle()](#Array+shuffle) ⇒ <code>Array.&lt;\*&gt;</code>
    * _static_
        * [.times(f, n)](#Array.times) ⇒ <code>Array.&lt;\*&gt;</code>
        * [.range(n)](#Array.range) ⇒ <code>Array.&lt;number&gt;</code>

<a name="Array+at"></a>

### array.at(i) ⇒ <code>\*</code>
Return array[i] with positive and negative wrapping

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| i | <code>number</code> | 

<a name="Array+chunk"></a>

### array.chunk(n) ⇒ <code>Array.&lt;Array.&lt;\*&gt;&gt;</code>
Chop an array into chunks of size n

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The chunk size |

<a name="Array+shuffle"></a>

### array.shuffle() ⇒ <code>Array.&lt;\*&gt;</code>
Randomly shuffle an array in-place

**Kind**: instance method of [<code>Array</code>](#Array)  
**Returns**: <code>Array.&lt;\*&gt;</code> - The shuffled array  
<a name="Array.times"></a>

### Array.times(f, n) ⇒ <code>Array.&lt;\*&gt;</code>
Return a new array with length n by calling function f(i) on each element

**Kind**: static method of [<code>Array</code>](#Array)  

| Param | Type | Description |
| --- | --- | --- |
| f | [<code>timesCallback</code>](#timesCallback) |  |
| n | <code>number</code> | The size of the array |

<a name="Array.range"></a>

### Array.range(n) ⇒ <code>Array.&lt;number&gt;</code>
Return an array containing numbers 0->(n - 1)

**Kind**: static method of [<code>Array</code>](#Array)  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The size of the array |

<a name="vec"></a>

## vec([x], [y]) ⇒ [<code>vec</code>](#vec)
Create a new vector

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [x] | <code>number</code> \| [<code>vec</code>](#vec) | The x component of the vector, or a vector to copy |
| [y] | <code>number</code> | The y component of the vector |

**Example** *(Various ways to initialise a vector)*  
```js
let a = vec(3, 2);  // (3, 2)
let b = vec(4);     // (4, 4)
let c = vec(a);     // (3, 2)
let d = vec();      // (0, 0)
```

* [vec([x], [y])](#vec) ⇒ [<code>vec</code>](#vec)
    * [.components(a)](#vec.components) ⇒ <code>Array.&lt;number&gt;</code>
    * [.ux()](#vec.ux) ⇒ [<code>vec</code>](#vec)
    * [.uy()](#vec.uy) ⇒ [<code>vec</code>](#vec)
    * [.add(a, b)](#vec.add) ⇒ [<code>vec</code>](#vec)
    * [.mul(a, b)](#vec.mul) ⇒ [<code>vec</code>](#vec)
    * [.sub(a, b)](#vec.sub) ⇒ [<code>vec</code>](#vec)
    * [.len(a)](#vec.len) ⇒ [<code>vec</code>](#vec)
    * [.manhattan(a)](#vec.manhattan) ⇒ [<code>vec</code>](#vec)
    * [.nor(a)](#vec.nor) ⇒ [<code>vec</code>](#vec)
    * [.dot(a, b)](#vec.dot) ⇒ [<code>vec</code>](#vec)
    * [.rot(a, r)](#vec.rot) ⇒ [<code>vec</code>](#vec)
    * [.eq(a, b)](#vec.eq) ⇒ <code>boolean</code>
    * [.rad(a)](#vec.rad) ⇒ <code>number</code>
    * [.cpy(a)](#vec.cpy) ⇒ [<code>vec</code>](#vec)
    * [.map(a, f)](#vec.map) ⇒ [<code>vec</code>](#vec)
    * [.str(a, [s])](#vec.str) ⇒ <code>string</code>

<a name="vec.components"></a>

### vec.components(a) ⇒ <code>Array.&lt;number&gt;</code>
Get the components of a vector as an array

**Kind**: static method of [<code>vec</code>](#vec)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to get components from |

<a name="vec.ux"></a>

### vec.ux() ⇒ [<code>vec</code>](#vec)
Return a unit vector (1, 0)

**Kind**: static method of [<code>vec</code>](#vec)  
<a name="vec.uy"></a>

### vec.uy() ⇒ [<code>vec</code>](#vec)
Return a unit vector (0, 1)

**Kind**: static method of [<code>vec</code>](#vec)  
<a name="vec.add"></a>

### vec.add(a, b) ⇒ [<code>vec</code>](#vec)
Add vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a + b  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | [<code>vec</code>](#vec) | 

<a name="vec.mul"></a>

### vec.mul(a, b) ⇒ [<code>vec</code>](#vec)
Scale a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a * b  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | <code>number</code> | 

<a name="vec.sub"></a>

### vec.sub(a, b) ⇒ [<code>vec</code>](#vec)
Subtract vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a - b  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | [<code>vec</code>](#vec) | 

<a name="vec.len"></a>

### vec.len(a) ⇒ [<code>vec</code>](#vec)
Get the length of a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - |a|  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.manhattan"></a>

### vec.manhattan(a) ⇒ [<code>vec</code>](#vec)
Get the length of a vector using taxicab geometry

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - |a|  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.nor"></a>

### vec.nor(a) ⇒ [<code>vec</code>](#vec)
Normalise a vector

**Kind**: static method of [<code>vec</code>](#vec)  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.dot"></a>

### vec.dot(a, b) ⇒ [<code>vec</code>](#vec)
Get a dot product of vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a ∙ b  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | [<code>vec</code>](#vec) | 

<a name="vec.rot"></a>

### vec.rot(a, r) ⇒ [<code>vec</code>](#vec)
Rotate a vector by r radians

**Kind**: static method of [<code>vec</code>](#vec)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) |  |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec.eq"></a>

### vec.eq(a, b) ⇒ <code>boolean</code>
Check if two vectors are equal

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>boolean</code> - True if the vectors are equal, false otherwise  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | [<code>vec</code>](#vec) | 

<a name="vec.rad"></a>

### vec.rad(a) ⇒ <code>number</code>
Get the angle of a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - The angle of the vector in radians  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.cpy"></a>

### vec.cpy(a) ⇒ [<code>vec</code>](#vec)
Copy a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A copy of a  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.map"></a>

### vec.map(a, f) ⇒ [<code>vec</code>](#vec)
Call a function on each component of a vector and build a new vector from the results

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - The mapped vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) |  |
| f | [<code>vectorMapCallback</code>](#vectorMapCallback) | The function to call on each component of the vector |

<a name="vec.str"></a>

### vec.str(a, [s]) ⇒ <code>string</code>
Convert a vector into a string

**Kind**: static method of [<code>vec</code>](#vec)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec</code>](#vec) |  |  |
| [s] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string |

<a name="mat"></a>

## mat(m, n, entries) ⇒ [<code>mat</code>](#mat)
Create a new matrix

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| m | <code>number</code> | <code>4</code> | The number of rows |
| n | <code>number</code> | <code>4</code> | The number of columns |
| entries | <code>Array.&lt;number&gt;</code> |  | Matrix values in reading order |


* [mat(m, n, entries)](#mat) ⇒ [<code>mat</code>](#mat)
    * [.identity(n)](#mat.identity) ⇒ [<code>mat</code>](#mat)
    * [.get(a, i, j)](#mat.get) ⇒ <code>number</code>
    * [.set(a, i, j, v)](#mat.set)
    * [.row(a, m)](#mat.row) ⇒ <code>Array.&lt;number&gt;</code>
    * [.col(a, n)](#mat.col) ⇒ <code>Array.&lt;number&gt;</code>
    * [.add(a, b)](#mat.add) ⇒ [<code>mat</code>](#mat)
    * [.sub(a, b)](#mat.sub) ⇒ [<code>mat</code>](#mat)
    * [.mul(a, b)](#mat.mul) ⇒ [<code>mat</code>](#mat)
    * [.scale(a, b)](#mat.scale) ⇒ [<code>mat</code>](#mat)
    * [.trans(a)](#mat.trans) ⇒ [<code>mat</code>](#mat)
    * [.minor(a, i, j)](#mat.minor) ⇒ [<code>mat</code>](#mat)
    * [.det(a)](#mat.det) ⇒ <code>number</code>
    * [.nor(a)](#mat.nor) ⇒ [<code>mat</code>](#mat)
    * [.adj(a)](#mat.adj) ⇒ [<code>mat</code>](#mat)
    * [.inv(a)](#mat.inv) ⇒ [<code>mat</code>](#mat)
    * [.eq(a, b)](#mat.eq) ⇒ <code>boolean</code>
    * [.cpy(a)](#mat.cpy) ⇒ [<code>mat</code>](#mat)
    * [.map(a, f)](#mat.map) ⇒ [<code>mat</code>](#mat)
    * [.str(a, [ms], [ns])](#mat.str) ⇒ <code>string</code>

<a name="mat.identity"></a>

### mat.identity(n) ⇒ [<code>mat</code>](#mat)
Get an identity matrix of size n

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The size of the matrix |

<a name="mat.get"></a>

### mat.get(a, i, j) ⇒ <code>number</code>
Get an entry from a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> - The value at position (i, j) in the matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.set"></a>

### mat.set(a, i, j, v)
Set an entry of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |
| v | <code>number</code> | The value to set |

<a name="mat.row"></a>

### mat.row(a, m) ⇒ <code>Array.&lt;number&gt;</code>
Get a row from a matrix as an array

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>Array.&lt;number&gt;</code> - Row m from the matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| m | <code>number</code> | The row offset |

<a name="mat.col"></a>

### mat.col(a, n) ⇒ <code>Array.&lt;number&gt;</code>
Get a column from a matrix as an array

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>Array.&lt;number&gt;</code> - Column n from the matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| n | <code>number</code> | The column offset |

<a name="mat.add"></a>

### mat.add(a, b) ⇒ [<code>mat</code>](#mat)
Add matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a + b  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | [<code>mat</code>](#mat) | 

<a name="mat.sub"></a>

### mat.sub(a, b) ⇒ [<code>mat</code>](#mat)
Subtract matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a - b  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | [<code>mat</code>](#mat) | 

<a name="mat.mul"></a>

### mat.mul(a, b) ⇒ [<code>mat</code>](#mat)
Multiply matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - ab  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | [<code>mat</code>](#mat) | 

<a name="mat.scale"></a>

### mat.scale(a, b) ⇒ [<code>mat</code>](#mat)
Scale a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a * b  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | <code>number</code> | 

<a name="mat.trans"></a>

### mat.trans(a) ⇒ [<code>mat</code>](#mat)
Transpose a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.minor"></a>

### mat.minor(a, i, j) ⇒ [<code>mat</code>](#mat)
Get the minor of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - The (i, j) minor of the matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.det"></a>

### mat.det(a) ⇒ <code>number</code>
Get the determinant of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> - The matrix determinant  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.nor"></a>

### mat.nor(a) ⇒ [<code>mat</code>](#mat)
Normalise a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.adj"></a>

### mat.adj(a) ⇒ [<code>mat</code>](#mat)
Get the adjugate of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.inv"></a>

### mat.inv(a) ⇒ [<code>mat</code>](#mat)
Get the inverse of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.eq"></a>

### mat.eq(a, b) ⇒ <code>boolean</code>
Check if two matrices are equal

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>boolean</code> - True if the matrices are identical, false otherwise  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | [<code>mat</code>](#mat) | 

<a name="mat.cpy"></a>

### mat.cpy(a) ⇒ [<code>mat</code>](#mat)
Copy a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - A copy of a  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.map"></a>

### mat.map(a, f) ⇒ [<code>mat</code>](#mat)
Call a function on each entry of a matrix and build a new matrix from the results

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| f | [<code>matrixMapCallback</code>](#matrixMapCallback) | The function to call on each entry of the matrix |

<a name="mat.str"></a>

### mat.str(a, [ms], [ns]) ⇒ <code>string</code>
Convert a matrix into a string

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |  |
| [ms] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string for columns |
| [ns] | <code>string</code> | <code>&quot;&#x27;\\n&#x27;&quot;</code> | The separator string for rows |

<a name="vec"></a>

## vec : <code>Object</code>
A 2d vector

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The x component of the vector |
| y | <code>number</code> | The y component of the vector |


* [vec](#vec) : <code>Object</code>
    * [.components(a)](#vec.components) ⇒ <code>Array.&lt;number&gt;</code>
    * [.ux()](#vec.ux) ⇒ [<code>vec</code>](#vec)
    * [.uy()](#vec.uy) ⇒ [<code>vec</code>](#vec)
    * [.add(a, b)](#vec.add) ⇒ [<code>vec</code>](#vec)
    * [.mul(a, b)](#vec.mul) ⇒ [<code>vec</code>](#vec)
    * [.sub(a, b)](#vec.sub) ⇒ [<code>vec</code>](#vec)
    * [.len(a)](#vec.len) ⇒ [<code>vec</code>](#vec)
    * [.manhattan(a)](#vec.manhattan) ⇒ [<code>vec</code>](#vec)
    * [.nor(a)](#vec.nor) ⇒ [<code>vec</code>](#vec)
    * [.dot(a, b)](#vec.dot) ⇒ [<code>vec</code>](#vec)
    * [.rot(a, r)](#vec.rot) ⇒ [<code>vec</code>](#vec)
    * [.eq(a, b)](#vec.eq) ⇒ <code>boolean</code>
    * [.rad(a)](#vec.rad) ⇒ <code>number</code>
    * [.cpy(a)](#vec.cpy) ⇒ [<code>vec</code>](#vec)
    * [.map(a, f)](#vec.map) ⇒ [<code>vec</code>](#vec)
    * [.str(a, [s])](#vec.str) ⇒ <code>string</code>

<a name="vec.components"></a>

### vec.components(a) ⇒ <code>Array.&lt;number&gt;</code>
Get the components of a vector as an array

**Kind**: static method of [<code>vec</code>](#vec)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) | The vector to get components from |

<a name="vec.ux"></a>

### vec.ux() ⇒ [<code>vec</code>](#vec)
Return a unit vector (1, 0)

**Kind**: static method of [<code>vec</code>](#vec)  
<a name="vec.uy"></a>

### vec.uy() ⇒ [<code>vec</code>](#vec)
Return a unit vector (0, 1)

**Kind**: static method of [<code>vec</code>](#vec)  
<a name="vec.add"></a>

### vec.add(a, b) ⇒ [<code>vec</code>](#vec)
Add vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a + b  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | [<code>vec</code>](#vec) | 

<a name="vec.mul"></a>

### vec.mul(a, b) ⇒ [<code>vec</code>](#vec)
Scale a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a * b  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | <code>number</code> | 

<a name="vec.sub"></a>

### vec.sub(a, b) ⇒ [<code>vec</code>](#vec)
Subtract vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a - b  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | [<code>vec</code>](#vec) | 

<a name="vec.len"></a>

### vec.len(a) ⇒ [<code>vec</code>](#vec)
Get the length of a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - |a|  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.manhattan"></a>

### vec.manhattan(a) ⇒ [<code>vec</code>](#vec)
Get the length of a vector using taxicab geometry

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - |a|  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.nor"></a>

### vec.nor(a) ⇒ [<code>vec</code>](#vec)
Normalise a vector

**Kind**: static method of [<code>vec</code>](#vec)  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.dot"></a>

### vec.dot(a, b) ⇒ [<code>vec</code>](#vec)
Get a dot product of vectors

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - a ∙ b  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | [<code>vec</code>](#vec) | 

<a name="vec.rot"></a>

### vec.rot(a, r) ⇒ [<code>vec</code>](#vec)
Rotate a vector by r radians

**Kind**: static method of [<code>vec</code>](#vec)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) |  |
| r | <code>number</code> | The angle to rotate by, measured in radians |

<a name="vec.eq"></a>

### vec.eq(a, b) ⇒ <code>boolean</code>
Check if two vectors are equal

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>boolean</code> - True if the vectors are equal, false otherwise  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 
| b | [<code>vec</code>](#vec) | 

<a name="vec.rad"></a>

### vec.rad(a) ⇒ <code>number</code>
Get the angle of a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: <code>number</code> - The angle of the vector in radians  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.cpy"></a>

### vec.cpy(a) ⇒ [<code>vec</code>](#vec)
Copy a vector

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - A copy of a  

| Param | Type |
| --- | --- |
| a | [<code>vec</code>](#vec) | 

<a name="vec.map"></a>

### vec.map(a, f) ⇒ [<code>vec</code>](#vec)
Call a function on each component of a vector and build a new vector from the results

**Kind**: static method of [<code>vec</code>](#vec)  
**Returns**: [<code>vec</code>](#vec) - The mapped vector  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>vec</code>](#vec) |  |
| f | [<code>vectorMapCallback</code>](#vectorMapCallback) | The function to call on each component of the vector |

<a name="vec.str"></a>

### vec.str(a, [s]) ⇒ <code>string</code>
Convert a vector into a string

**Kind**: static method of [<code>vec</code>](#vec)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>vec</code>](#vec) |  |  |
| [s] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string |

<a name="vectorMapCallback"></a>

## vectorMapCallback ⇒ <code>number</code>
A function to call on each component of a vector

**Kind**: global typedef  
**Returns**: <code>number</code> - The mapped component  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The component value |
| label | <code>&#x27;x&#x27;</code> \| <code>&#x27;y&#x27;</code> | The component label (x or y) |

<a name="mat"></a>

## mat : <code>Object</code>
A matrix

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| m | <code>number</code> | The number of rows in the matrix |
| n | <code>number</code> | The number of columns in the matrix |
| entries | <code>Array.&lt;number&gt;</code> | The matrix values |


* [mat](#mat) : <code>Object</code>
    * [.identity(n)](#mat.identity) ⇒ [<code>mat</code>](#mat)
    * [.get(a, i, j)](#mat.get) ⇒ <code>number</code>
    * [.set(a, i, j, v)](#mat.set)
    * [.row(a, m)](#mat.row) ⇒ <code>Array.&lt;number&gt;</code>
    * [.col(a, n)](#mat.col) ⇒ <code>Array.&lt;number&gt;</code>
    * [.add(a, b)](#mat.add) ⇒ [<code>mat</code>](#mat)
    * [.sub(a, b)](#mat.sub) ⇒ [<code>mat</code>](#mat)
    * [.mul(a, b)](#mat.mul) ⇒ [<code>mat</code>](#mat)
    * [.scale(a, b)](#mat.scale) ⇒ [<code>mat</code>](#mat)
    * [.trans(a)](#mat.trans) ⇒ [<code>mat</code>](#mat)
    * [.minor(a, i, j)](#mat.minor) ⇒ [<code>mat</code>](#mat)
    * [.det(a)](#mat.det) ⇒ <code>number</code>
    * [.nor(a)](#mat.nor) ⇒ [<code>mat</code>](#mat)
    * [.adj(a)](#mat.adj) ⇒ [<code>mat</code>](#mat)
    * [.inv(a)](#mat.inv) ⇒ [<code>mat</code>](#mat)
    * [.eq(a, b)](#mat.eq) ⇒ <code>boolean</code>
    * [.cpy(a)](#mat.cpy) ⇒ [<code>mat</code>](#mat)
    * [.map(a, f)](#mat.map) ⇒ [<code>mat</code>](#mat)
    * [.str(a, [ms], [ns])](#mat.str) ⇒ <code>string</code>

<a name="mat.identity"></a>

### mat.identity(n) ⇒ [<code>mat</code>](#mat)
Get an identity matrix of size n

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | The size of the matrix |

<a name="mat.get"></a>

### mat.get(a, i, j) ⇒ <code>number</code>
Get an entry from a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> - The value at position (i, j) in the matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.set"></a>

### mat.set(a, i, j, v)
Set an entry of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |
| v | <code>number</code> | The value to set |

<a name="mat.row"></a>

### mat.row(a, m) ⇒ <code>Array.&lt;number&gt;</code>
Get a row from a matrix as an array

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>Array.&lt;number&gt;</code> - Row m from the matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| m | <code>number</code> | The row offset |

<a name="mat.col"></a>

### mat.col(a, n) ⇒ <code>Array.&lt;number&gt;</code>
Get a column from a matrix as an array

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>Array.&lt;number&gt;</code> - Column n from the matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| n | <code>number</code> | The column offset |

<a name="mat.add"></a>

### mat.add(a, b) ⇒ [<code>mat</code>](#mat)
Add matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a + b  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | [<code>mat</code>](#mat) | 

<a name="mat.sub"></a>

### mat.sub(a, b) ⇒ [<code>mat</code>](#mat)
Subtract matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a - b  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | [<code>mat</code>](#mat) | 

<a name="mat.mul"></a>

### mat.mul(a, b) ⇒ [<code>mat</code>](#mat)
Multiply matrices

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - ab  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | [<code>mat</code>](#mat) | 

<a name="mat.scale"></a>

### mat.scale(a, b) ⇒ [<code>mat</code>](#mat)
Scale a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - a * b  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | <code>number</code> | 

<a name="mat.trans"></a>

### mat.trans(a) ⇒ [<code>mat</code>](#mat)
Transpose a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.minor"></a>

### mat.minor(a, i, j) ⇒ [<code>mat</code>](#mat)
Get the minor of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - The (i, j) minor of the matrix  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| i | <code>number</code> | The row offset |
| j | <code>number</code> | The column offset |

<a name="mat.det"></a>

### mat.det(a) ⇒ <code>number</code>
Get the determinant of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>number</code> - The matrix determinant  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.nor"></a>

### mat.nor(a) ⇒ [<code>mat</code>](#mat)
Normalise a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.adj"></a>

### mat.adj(a) ⇒ [<code>mat</code>](#mat)
Get the adjugate of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.inv"></a>

### mat.inv(a) ⇒ [<code>mat</code>](#mat)
Get the inverse of a matrix

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.eq"></a>

### mat.eq(a, b) ⇒ <code>boolean</code>
Check if two matrices are equal

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: <code>boolean</code> - True if the matrices are identical, false otherwise  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 
| b | [<code>mat</code>](#mat) | 

<a name="mat.cpy"></a>

### mat.cpy(a) ⇒ [<code>mat</code>](#mat)
Copy a matrix

**Kind**: static method of [<code>mat</code>](#mat)  
**Returns**: [<code>mat</code>](#mat) - A copy of a  

| Param | Type |
| --- | --- |
| a | [<code>mat</code>](#mat) | 

<a name="mat.map"></a>

### mat.map(a, f) ⇒ [<code>mat</code>](#mat)
Call a function on each entry of a matrix and build a new matrix from the results

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Description |
| --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |
| f | [<code>matrixMapCallback</code>](#matrixMapCallback) | The function to call on each entry of the matrix |

<a name="mat.str"></a>

### mat.str(a, [ms], [ns]) ⇒ <code>string</code>
Convert a matrix into a string

**Kind**: static method of [<code>mat</code>](#mat)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | [<code>mat</code>](#mat) |  |  |
| [ms] | <code>string</code> | <code>&quot;&#x27;, &#x27;&quot;</code> | The separator string for columns |
| [ns] | <code>string</code> | <code>&quot;&#x27;\\n&#x27;&quot;</code> | The separator string for rows |

<a name="matrixMapCallback"></a>

## matrixMapCallback ⇒ <code>number</code>
A function to call on each entry of a matrix

**Kind**: global typedef  
**Returns**: <code>number</code> - The mapped entry  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The entry value |
| index | <code>number</code> | The entry index |
| entries | <code>Array.&lt;number&gt;</code> | The array of matrix entries |

<a name="interpolationCallback"></a>

## interpolationCallback ⇒ <code>number</code>
An interpolation function

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>number</code> |  |
| b | <code>number</code> |  |
| i | <code>number</code> | The interpolation value |

<a name="timesCallback"></a>

## timesCallback ⇒ <code>\*</code>
A function for generating array values

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | The array index |

