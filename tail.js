const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😉😉😉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤔🤔🤔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};


const words = [];
let w = tail(words); // no need to capture the return value since we are not checking it
assertEqual(w.length, 0); // original array should still have 3 elements!