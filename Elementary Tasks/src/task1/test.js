describe("chessBoard", function () {

  it("return string  5x6 chessboard with * symbol", function () {
      assert.equal(chessBoard(5 , 6, '*'), 
      ["* * * * * * \n * * * * * *\n* * * * * * \n * * * * * *\n* * * * * * \n"]);
  });
  it("return string  2x2 chessboard with ? symbol ", function () {
      assert.equal(chessBoard(2 , 2, '?'), ["? ? \n ? ?\n"]);
  });
  it("if arguments length < 3 return error message not enought arguments ", function () {
    assert.deepEqual(chessBoard(5 , '*'), {status:'failed', reason:'must be 3 arguments height, width, symbol;'});
  });
  it("if height not a number return error message 'height must be positive'  ", function () {
    assert.deepEqual(chessBoard('df' , 2, '*'), {status:'failed', reason:' height must be positive number above 1;'});
  });
  it("if width not a number return error message 'width must be positive' ", function () {
    assert.deepEqual(chessBoard(5 , 'fg', '*'), {status:'failed', reason:' width must be positive number above 1;'});
  });
  it("if symbol are empty return error message 'symbol must have at least one symbol' ", function () {
    assert.deepEqual(chessBoard(5 , 3, ' '), {status:'failed', reason:' symbol must be one or more symbols'});
  });
});