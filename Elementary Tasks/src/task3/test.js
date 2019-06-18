describe("compareTraingles", function () {

  it("return sorted array of triangles names ", function () {
      assert.deepEqual(compareTraingles([
        {vertices: 'ABC',
          a: 20,
          b: 20,
          c: 22},
        {vertices: 'DEF',
          d: 200,
          e: 200,
          f: 223.35},
        {vertices: 'GHI',
          g: 24,
          h: 26,
          i: 26.36}
      ]), 
      ["DEF", "GHI", "ABC"]);
  });
  it("if name of triangle or any of sides miss in object triangle return error message about this", function () {
      assert.deepEqual(compareTraingles([{vertices: 'ABC',a:20,b:20,c:22},{d:200,e:200,f:223.35}]), {status:'failed', reason:'argument must be array of objects with name and three sides'});
  });
  it("if sides not named like name of triangle return error message about this", function () {
    assert.deepEqual(compareTraingles([{vertices: 'ABC',a:20,b:20,c:22},{vertices: 'XYZ', d:200,e:200,f:223.35}]), {status:'failed', reason:'sides must be named like vertice'});
  });
  it("if any of sides not a number or below 0 return error message about this", function () {
    assert.deepEqual(compareTraingles([{vertices: 'ABC',a:-20,b:20,c:22},{vertices: 'DEF', d:200,e:200,f:223.35}]), {status:'failed', reason:'sides must be positive numbers'});
  });
  it("if summ of two sides of any triangke smaller than third return error message about this", function () {
    assert.deepEqual(compareTraingles([{vertices: 'ABC',a:20,b:20,c:112},{vertices: 'DEF', d:200,e:200,f:223.35}]), {status:'failed', reason:'the summ of two sides must be bigger third side'});
  });
});