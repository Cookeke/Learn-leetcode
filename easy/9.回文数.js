/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let s = x.toString()
  return s === s.split('').reverse().join('')
};
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))