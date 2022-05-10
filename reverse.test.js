
const reverseString = require("./reverse.js")
it("should return reversed string",() => {
  // arrange
  const hello = "Hello";

  // act
  const reversedString = reverseString(hello);
  expect(reversedString).toBe("olleH")
})