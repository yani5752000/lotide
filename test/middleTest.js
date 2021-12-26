const assert = require('chai').assert;
const middle = require("../middle");

describe("#midle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });

  it("returns [] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []); 
  });
});

