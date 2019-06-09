describe("compareTraingles", function () {

  it("return sorted array of triangles names ", function () {
      assert.equal(compareTraingles([
        {vertices: 'ABC',
          a: '200g',
          b: 200,
          c: 223},
        {vertices: 'DEF',
          a: 200,
          b: 200,
          c: 223.35},
        {vertices: 'GHI',
          a: 24,
          b: 26,
          c: 26.36}
      ]), 
      [["DEF", "ABC", "GHI"].join()]);
  });
  it("if argument not array return error meassage about array", function () {
      assert.equal(compareTraingles({}), [JSON.stringify({status:'failed', reason:'argument must be array'})]);
  });
  it("if argument  not array of objects return error message about this ", function () {
    assert.equal(compareTraingles([[1,2],[1,2]]), [JSON.stringify({status:'failed', reason:'argument must be array of objects'})]);
  });
  it("if objects dont have four values return error message about this", function () {
    assert.equal(compareTraingles([
      {vertices: 'ABC',
        a: '200g',
        b: 200,},
      {vertices: 'DEF',
        a: 200,
        b: 200,
        c: 223.35}
    ]),[JSON.stringify({status:'failed', reason:'each triangle must have name and three sides'})]);
  });
  it("if sides dont positive numbers return error message about this", function () {
    assert.equal(compareTraingles([
      {vertices: 'ABC',
        a: -1,
        b: 200,
        c: 200},
      {vertices: 'DEF',
        a: 200,
        b: 200,
        c: 223.35} 
      ]),[JSON.stringify({status:'failed', reason:'sides must be positive numbers'})]);
  });
});