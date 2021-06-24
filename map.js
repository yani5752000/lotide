const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(["tree", "hello", "four"], word => word[0]), ["t", "h", "f"]);
assertArraysEqual(map(["tree", "hello", "four"], word => word[0]), ["t", "y", "f"]);