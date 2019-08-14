/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 1) return ['()']
  let kuo = ['(', ')']
  let length = 2 * (n - 1)
  function dg(string) {
    if (string.length === length) {
      return string
    } else {
      return [...dg(string + '('), ...dg(string + ')')]
    }
  }
  let a = dg('')
  var result = [];
  for (let i = 0, len = a.length; i < len; i += length) {
    let temp = a.slice(i, i + length)
    temp.unshift(kuo[0])
    temp.push(kuo[1])
    result.push(temp);
  }
  let arr = []
  result.forEach(item => {
    let count = 0
    item.forEach(item2 => {
      item2 === '(' && count--
      if (item2 === ')') {
        if (count === 0) {
          count = NaN
        } else {
          count++
        }
      }
    })
    if (count === 0) {
      arr.push(item.join(''))
    }
  })
  return arr
}

console.log(generateParenthesis(3))