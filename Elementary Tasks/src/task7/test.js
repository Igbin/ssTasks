describe("fibonachi", function () {

  it("find and return fibonachi numbers by their length", function () {
    assert.deepEqual(fibonachi({length:1}), [0, 1, 1, 2, 3, 5, 8]);
  });
  it("find and return fibonachi numbers by range min and max", function () {
    assert.deepEqual(fibonachi({min:22, max:144}), [34, 55, 89, 144]);
  });
  it("if argument not object return error message about it", function () {
    assert.deepEqual(fibonachi([10, 'abc']), {status: "failed", reason: "context must be object"});
  });
  it("if all arguments missing  or named not like min, max , length  - return error message about it", function () {
    assert.deepEqual(fibonachi({a:1}), {status: "failed", reason: "context must have min and max or length values"});
  });
  it("if argument have any of min or max value but dont have other return error message about it", function () {
    assert.deepEqual(fibonachi({min:1}), {status: "failed", reason: "context must have min and max or length values"});
  });
  it("if any of argument noa a number or smaller than 0 return error message about it", function () {
    assert.deepEqual(fibonachi({min:'abc', max:144}), {status: "failed", reason: "min and max must be positive numbers"});
  });
});