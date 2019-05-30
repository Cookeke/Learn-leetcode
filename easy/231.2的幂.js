/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // let flag = false
  // let match = (n) => {
  //   if (n === 2 || n === 1) {
  //     flag = true
  //     return
  //   } else if (n % 2 > 0 || n === 0) {
  //     return
  //   } else {
  //     match(n / 2)
  //   }
  // }
  // match(n)
  // return flag
  return (n > 0) && (n & -n) === n
};
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(218))