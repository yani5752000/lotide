const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😉😉😉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤔🤔🤔Assertion Failed: ${actual} !== ${expected}`);
  }
};





const eqObjects = function(object1, object2) {
  if (!(object1 instanceof Object) && !(object2 instanceof Object)) {
    return (object1 === object2);
  } else if ((object1 instanceof Object) && !(object2 instanceof Object)) {
    return false;
  } else if (!(object1 instanceof Object) && (object2 instanceof Object)) {
    return false;
  }

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  for(let k of Object.keys(object1)) {
    if (!Object.keys(object2).includes(k)) {
      return false;
    }
  }  
  for(let k of Object.keys(object1)) {
    if (!eqObjects(object1[k], object2[k])) {
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
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) , false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects([2, 3],[2, 3]), true);
assertEqual(eqObjects([2, [4, 3]],[2, [4, 3]]), true);
assertEqual(eqObjects([2, [5, 3]],[2, [4, 3]]), false);
assertEqual(eqObjects([2, 3],[2, [4, 3]]), false);
