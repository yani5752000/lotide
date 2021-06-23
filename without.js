const without = function(source, itemsToRemove){
  const output = [];
  for(let x of source){
    output.push(x);
  }

  for(let i = 0; i < output.length; i++) {
    for(let x of itemsToRemove) {
      if (output[i] === x) {
        output.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return output;
};

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

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);