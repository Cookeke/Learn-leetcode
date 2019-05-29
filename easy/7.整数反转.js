/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let side = Math.pow(2, 31)
  let result = String(x).slice(x < 0 ? 1 : '').split('').reverse().join('') * Math.sign(x)
  return side * (-1) <= result && result <= side - 1 ? result : 0
};
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))