/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let number = '1'
  for (let i = 1; i < n; i++) {
    let key = number[0]
    let prev = 0
    let count = 0
    let temp = ''
    while (prev < number.length) {
      while (key === number[prev]) {
        count++
        prev++
      }
      temp += count + key
      count = 0
      key = number[prev]
    }
    number = temp
  }
  return number
};
// console.log(countAndSay(1))
console.log(countAndSay(4))
