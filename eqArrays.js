const eqObjects = require("./eqObjects");

const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  }

  for(let i = 0; i < a1.length; i++) {
    if(!Array.isArray(a1[i]) && !Array.isArray(a2[i])) {
      if(!(a1[i] instanceof Object) && !(a2[i] instanceof Object)) {
        if (a1[i] !== a2[i]){
          return false;
        }
      }
      if(!(a1[i] instanceof Object) && (a2[i] instanceof Object)) {
        return false;
      }
      if((a1[i] instanceof Object) && !(a2[i] instanceof Object)) {
        return false;
      }
      if((a1[i] instanceof Object) && (a2[i] instanceof Object)) {
        if(!eqObjects(a1[i], a2[i])) {
          return false;
        }
      }
    }
    if(!Array.isArray(a1[i]) && Array.isArray(a2[i])) {
      return false;
    }
    if(Array.isArray(a1[i]) && !Array.isArray(a2[i])) {
      return false;
    }
    if(Array.isArray(a1[i]) && Array.isArray(a2[i])) {
      if(!eqArrays(a1[i], a2[i])) {
        return false;
      }
    }
    
    
    
  }

  return true;
};

module.exports = eqArrays;

