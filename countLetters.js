const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😉😉😉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤔🤔🤔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};

  for(let item of str) {
    if(item !== " " ) {
      if(results[item]){
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};


console.log(countLetters("lighthouse in the house"));

console.log(countLetters(""));
console.log(countLetters("  "));
console.log(countLetters("l"));

