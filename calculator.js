class Calculator {
  static addNumber(a,b) {
    if(isNaN(a)) {
      throw new Error("a is not a numbr")
    }
    else if(isNaN(b)) {
      throw new Error("b is not a numbr")

    }
    return a + b;
  }
  static subtractNumber(a,b) {
    if(isNaN(a)) {
      throw new Error("a is not a numbr")
    }
    else if(isNaN(b)) {
      throw new Error("b is not a numbr")

    }
    return a - b;
  }

  static divideNumber(a,b) {
    if(isNaN(a)) {
      throw new Error("a is not a numbr")
    }
    else if(isNaN(b)) {
      throw new Error("b is not a numbr")

    }
    else if(b === 0) {
      throw new Error("cannot divide by 0 ")

    }
    return a /b;
  }

  static multiplyNumber(a,b) {
    return a * b;
  }
}
const [a,b] = [1, 2];
module.exports = Calculator