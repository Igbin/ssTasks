describe("findPalindrome", function () {

  it("return biggest palimndrome in number", function () {
      assert.deepEqual(findPalindrome(1234437), '3443');
  });
  it("return 0 if number doesnot contain palindrome", function () {
    assert.deepEqual(findPalindrome(12345), 0);
  });
  it("return argument if argument is palindrome", function () {
    assert.deepEqual(findPalindrome(3443), '3443');
  });
  it("return 0 if palindrome is a number below 10", function () {
    assert.deepEqual(findPalindrome(3), 0);
  });
  it("if argument missing or below 0 return error message about it", function () {
    assert.deepEqual(findPalindrome(), {status:'failed', reason:'argument must be positive number'});
  });
});