const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  for(let k of Object.keys(object1)) {
    if (!Object.keys(object2).includes(k)) {
      return false;
    }
  }  
  for(let k of Object.keys(object1)) {
    if (!Array.isArray(object1[k]) && !Array.isArray(object2[k])) {
      if (object1[k] !== object2[k]) {
        return false;
      }
    }
    else if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
      if (!eqArrays(object1[k], object2[k])){
        return false;
      }
    }
    else {
        return false;
      }
  } 
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`😉😉😉Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🤔🤔🤔Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: '2' }, { b: 2, a: '1' });
