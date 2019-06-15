/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = ''
  let number = '1'
  for (let i = 1; i < n; i++) {
    let prev = 0
    while (prev > number.length) {
      number[prev]
      prev++
    }
  }
  return result
};
console.log(countAndSay(1))
console.log(countAndSay(4))
