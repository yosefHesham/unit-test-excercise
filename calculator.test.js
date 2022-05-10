const Calculator = require("./calculator.js")

describe("Adding",() => {
  test("Adding 2 numbers",() => {
    // arrange
    const [a,b] = [1, 2];

    // act
    const result = Calculator.addNumber(a,b)

    // assert

    expect(result).toBe(3)

  })

  test("if the first paramter is not a number",() => {
    // arrange
    const [a,b] = ["x", 2];

    // act
    

    // assert

    expect(() => Calculator.addNumber(a,b)).toThrow(Error)
  })
  test("if the first paramter is not a number",() => {
    // arrange
    const [a,b] = [2, "x"];

    // act
    

    // assert

    expect(() => Calculator.addNumber(a,b)).toThrow(Error)
  })
  test("subtracting 2 numbers",() => {
    // arrange
    const [a,b] = [1, 2];

    // act
    const result = Calculator.subtractNumber(a,b)

    // assert

    expect(result).toBe(-1)

  })

  test("if the first paramter is not a number",() => {
    // arrange
    const [a,b] = ["x", 2];

    // act
    

    // assert

    expect(() => Calculator.addNumber(a,b)).toThrow(Error)
  })
  test("if the first paramter is not a number",() => {
    // arrange
    const [a,b] = [2, "x"];

    // act
    

    // assert

    expect(() => Calculator.addNumber(a,b)).toThrow(Error)
  })
})