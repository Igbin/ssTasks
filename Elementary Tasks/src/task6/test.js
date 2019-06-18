describe("squaresRow", function () {

  it("return numbers row of n length in string format", function () {
    assert.deepEqual(squaresRow(10, 100), '10, 11, 12, 13, 14, 15, 16, 17, 18, 19');
  });
  it("if length or number miss or 0 return error message about it", function () {
    assert.deepEqual(squaresRow(10, 0), {status: "failed", reason: "arguments must be length row and min square and bigger than 0"});
  });
  it("if length or number not a number or  smaller then 0 return error message about it", function () {
    assert.deepEqual(squaresRow(10, 'abc'), {status: "failed", reason: "length row and min square number must be positive numbers"});
  });
});