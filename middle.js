const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    return [arr[(arr.length - 1) / 2]];
  } else if (arr.length % 2 === 0) {
    return [arr[(arr.length - 2) / 2], arr[arr.length / 2]];
  }
};

module.exports = middle;