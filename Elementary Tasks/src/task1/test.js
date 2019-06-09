describe("chessBoard", function () {

  it("return string  5x6 chessboard with * symbol", function () {
      assert.equal(chessBoard(5 , 6, '*'), 
      ["* * * * * * \n * * * * * *\n* * * * * * \n * * * * * *\n* * * * * * \n"]);
  });
  it("return string  2x2 chessboard with ? symbol ", function () {
      assert.equal(chessBoard(2 , 2, '?'), ["? ? \n ? ?\n"]);
  });
  it("if arguments length < 3 return error message not enought arguments ", function () {
    assert.equal(chessBoard('5' , '*'), [JSON.stringify({status:'failed', reason:'must be 3 arguments height, width, symbol;'})]);
  });
  it("return error message height must be positive  ", function () {
    assert.equal(chessBoard('df' , '2', '*'), [JSON.stringify({status:'failed', reason:' height must be positive number above 1;'})]);
  });
  it("return error message width must be positive ", function () {
    assert.equal(chessBoard('5' , 'fg', '*'), [JSON.stringify({status:'failed', reason:' width must be positive number above 1;'})]);
  });
  it("return error message symbol must have at least one symbol ", function () {
    assert.equal(chessBoard('5' , '3', ' '), [JSON.stringify({status:'failed', reason:' symbol must be one or more symbols'})]);
  });
});