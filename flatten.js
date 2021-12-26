

const flatten = (arr) => {
  const output = [];

  for (let element of arr) {
    if(Array.isArray(element)) {
      const inArr = flatten(element);
      for(let x of inArr) {
        output.push(x);
      }
    } else {
      output.push(element);
    }
  }

  return output;
}

module.exports = flatten;