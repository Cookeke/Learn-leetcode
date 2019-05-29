/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let side = Math.pow(2, 31)
  let result = Math.sign(x) * String(x).slice(x < 0 ? 1 : '').split('').reverse().join('')
  return -side <= result && result <= side - 1 ? result : 0
};
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))