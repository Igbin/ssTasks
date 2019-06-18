describe("compareHappyTickets", function () {

  it("return result object with easy way winner", function () {
    assert.deepEqual(compareHappyTickets({min:'000001', max: '999999'}), {winner: "Easy Way", eassyTickets: 55251, hardTickets: 25080});
  });
  it("return result object with hard way winner", function () {
    assert.deepEqual(compareHappyTickets({min:'111342', max: '111442'}), {winner: "Hard Way", eassyTickets: 0, hardTickets: 6});
  });
  it("return result object with draw winner if easy and hard way tickets the same", function () {
    assert.deepEqual(compareHappyTickets({min:'111119', max: '111129'}), {winner: "Draw", eassyTickets: 1, hardTickets: 1});
  });
  it("if any values miss or argument is not object or values named not like 'min' and 'max' return error message about this", function () {
    assert.deepEqual(compareHappyTickets({ max: '111129'}), {status: "failed", reason: "argument must be object context with min and max values"});
  });
  it("if in or max not in string format return error message about this", function () {
    assert.deepEqual(compareHappyTickets({min:111111, max: '111129'}), {status: "failed", reason: "min and max must be in strings format"});
  });
  it("if in or max not 6 digits number return error message about this", function () {
    assert.deepEqual(compareHappyTickets({min:'abc', max: '111129'}), {status: "failed", reason: "min and max must be number of 6 digits"});
  });
  it("if max smaller than min return error message about this", function () {
    assert.deepEqual(compareHappyTickets({min: '111111', max: '110000'}), {status: "failed", reason: "invalid range"});
  });
});