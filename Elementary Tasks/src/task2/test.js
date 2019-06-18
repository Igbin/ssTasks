describe("envelopComparison", function () {

  it("return number of smaller envelop", function () {
      assert.equal(envelopComparison({a:24, b:25}, {c:25, d:26}), [1]);
  });
  it("return 0 if any  one envelop could not fit in other", function () {
      assert.equal(envelopComparison({a:24, b:25}, {c:24, d:26}), [0]);
  });
  it("if any of sides  miss or sides not named like [a, b, c, d] return error about this", function () {
    assert.deepEqual(envelopComparison({a:24}, {c:24, d:26}), {status:'failed', reason:'arguments must be two objects with two sides a,b and c,d'});
  });
  it("if any of sides not a number or below 0 return error about this", function () {
    assert.deepEqual(envelopComparison({a:24, b:'abc'}, {c:24, d:26}), {status:'failed', reason:'all sides must be positive numbers'});
  });
});