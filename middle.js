const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }

  for(let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]){
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😉😉😉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤔🤔🤔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[(arr.length - 1) / 2]];
  } else if (arr.length % 2 === 0) {
    return [arr[(arr.length - 2) / 2], arr[arr.length / 2]];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);