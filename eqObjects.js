const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😉😉😉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤔🤔🤔Assertion Failed: ${actual} !== ${expected}`);
  }
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: '1', b: '2' }, { b: 2, a: '1' }), false);
