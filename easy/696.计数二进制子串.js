/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let count = 0
  let match = (str) => {
    let a = str.match(/^(0+|1+)/)[0]
    let b = (a[0] ^ 1).toString().repeat(a.length)
    return str.startsWith(a + b)
  }
  for (let i = 0, len = s.length - 1; i < len; i++) {
    match(s.slice(i)) && count++
  }
  return count
};

console.log(countBinarySubstrings('00110011'))
console.log(countBinarySubstrings('10101'))