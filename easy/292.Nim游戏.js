/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return Boolean(n % 4)
};
console.log(canWinNim(4))