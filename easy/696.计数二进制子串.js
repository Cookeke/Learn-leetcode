/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let result = 0
  function match(str) {
    
    return
  }
  for (let i = 0; i < s.length - 1; i++) {
    match(str.slice(i)) ? result++ : ''
  }
  return result
};

console.log(countBinarySubstrings('00110011'))
console.log(countBinarySubstrings('10101'))