# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yani5752000/lotide`

**Require it:**

`const _ = require('@uyani5752000/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the first element of arr
* `tail(arr)`: returns the portion of arr next to its first element
* `middle(arr)`: returns the array consisting of the middle element(s) of arr
* `countLetters(str)`: returns an object that its keys are the distinct non-space characters of str;the value for each key is the number of it occurrences in str
* `countOnly(arr, obj)`: returns an object that its keys are the keys from obj that their values are true. Th value for each key in the returned object is the number of its occurences in arr.
* `findKey(obj, callback)`: returns the first key in obj of that its value if passed to callback will make callback to return a truthy  
* `findKeyByValue(obj, val)`: returns the first key of obj that its vlue is strictly equal to val
* `letterPositions(astr)`: returns and object that its keys are the non-space charachters of str and the value for each key in the returned is an array that its elements are the indexes where the key occurres in str 
* `map(arr, callback)`: returns an array of the same size as arr that each of its elements are the result of calling callback with the corresponding element from arr as its argument
* `takeUntil(arr, callback)`: returns an array that its elements are those elements of arr from its beginning up to before the first element of arr the if passed to callback returns a truthy 
* `without(arr1, arr2)`: returns an array consisting of those elements of arr1 that are not in arr2
