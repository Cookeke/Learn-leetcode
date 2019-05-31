/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let make = (n) => {
    if (n === 0) {
      return ['0']
    } else if (n === 1) {
      return ['0', '1']
    } else {
      let prev = make(n - 1)
      let result = []
      let max = Math.pow(2, n)
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[--max] = `1${prev[i]}`
      }
      return result
    }
  }
  return make(n).map(item => parseInt(item, 2))
};
console.log(grayCode(2))
console.log(grayCode(0))
console.log(grayCode(11))