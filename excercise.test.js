const stringLength = require("./excercise.js")
it("should return string length",()=> {
  // arange
  const stringTest = "Hello";

  // act

 const lengthOfString = stringLength(stringTest)

 //assert

 expect(lengthOfString).toBe(5)
  
})

it("should return error if the length is less than 1",()=> {
  // arange
  const stringTest = "";

  // act


 //assert

 expect(() => stringLength(stringTest)).toThrow("String is less than 1")
})

it("should return error if the length more than than 10",()=> {
  // arange
  const stringTest = "jadssjkasdjdkajkshsdkajshkjahksjdhkas";

  // act


 //assert

 expect(() => stringLength(stringTest)).toThrow("String is more than 10")
})