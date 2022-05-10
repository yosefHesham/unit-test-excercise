/**
 * 
 * @param {String} value 
 */
 const stringLength = (value) => {
    if(value.length < 1) {
      throw new Error("String is less than 1")
    }
    else if(value.length > 10) {
      throw new Error("String is more than 10")
    }
  return value.length;
}

module.exports =  stringLength