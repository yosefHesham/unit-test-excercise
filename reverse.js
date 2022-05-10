/**
 * 
 * @param {String} value 
 */
const reverseString = (value) => {
  const stringArray = value.split("");
  return stringArray.reverse().join("")
}

module.exports = reverseString