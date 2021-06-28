const findKey = require("./findKey");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😉😉😉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤔🤔🤔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for(let x of Object.keys(obj)) {
    if (obj[x] === val) {
      return x;
    }
  }
    return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Spartacus"), undefined);

module.exports = findKey;