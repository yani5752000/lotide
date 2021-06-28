const letterPositions = function(str) {
  const results = {};

  for(let  i = 0; i < str.length; i++) {
    if(str[i] !== " " ) {
      if(results[str[i]]){
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }

  return results;
};


console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));

module.exports = letterPositions;