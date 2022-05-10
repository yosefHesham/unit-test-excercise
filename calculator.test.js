const Calculator = require("./calculator.js");

describe("Adding", () => {
  test("Adding 2 numbers", () => {
    // arrange
    const [a, b] = [1, 2];

    // act
    const result = Calculator.addNumber(a, b);

    // assert

    expect(result).toBe(3);
  });

  test("if the first paramter is not a number", () => {
    // arrange
    const [a, b] = ["x", 2];

    // act

    // assert

    expect(() => Calculator.addNumber(a, b)).toThrow(Error);
  });
  test("if the first paramter is not a number", () => {
    // arrange
    const [a, b] = [2, "x"];


    // assert

    expect(() => Calculator.addNumber(a, b)).toThrow(Error);
  });
});

describe("Test subract function", () => {
  test("subtracting 2 numbers, it should return -1", () => {
    // arrange
    const [a, b] = [1, 2];

    // act
    const result = Calculator.subtractNumber(a, b);

    // assert

    expect(result).toBe(-1);
  });

  test("if the first paramter is not a number it should throw error", () => {
    // arrange
    const [a, b] = ["x", 2];

    // act

    // assert

    expect(() => Calculator.subtractNumber(a, b)).toThrow(Error);
  });
  test("if the first paramter is not a number it should throw error", () => {
    // arrange
    const [a, b] = [2, "x"];

    // act

    // assert

    expect(() => Calculator.subtractNumber(a, b)).toThrow(Error);
  });
});


describe("Test divide function", () => {
  test("dividing 2 numbers, it should return 2", () => {
    // arrange
    const [a, b] = [4, 2];

    // act
    const result = Calculator.divideNumber(a, b);

    // assert

    expect(result).toBe(2);
  });

  test("if the first paramter is not a number it should throw error", () => {
    // arrange
    const [a, b] = ["x", 2];

    // act

    // assert

    expect(() => Calculator.divideNumber(a, b)).toThrow(Error);
  });
  test("if the first paramter is not a number it should throw error", () => {
    // arrange
    const [a, b] = [2, "x"];

    // assert

    expect(() => Calculator.divideNumber(a, b)).toThrow(Error);
  });
  
  test("it should throw error if the divisor is 0",() => {
    const [a, b] = [2, 0];

    // assert

    expect(() => Calculator.divideNumber(a, b)).toThrow(Error);
  })
});
