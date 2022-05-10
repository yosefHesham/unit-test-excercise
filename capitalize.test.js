
const capitalize = require("./capitalize.js")
it("should return string with first char capitalized",()=> {
  //arrange
  const word = "yousef"

  // act

  const result = capitalize(word)

  //assert
  expect(result).toBe("Yousef")

})