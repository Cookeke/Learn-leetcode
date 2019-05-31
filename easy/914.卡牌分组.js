/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  // const hash = deck.reduce((pre, num) => {
  //   pre[num] ? pre[num]++ : pre[num] = 1
  //   return pre
  // }, {})
  const obj = {}
  deck.forEach(item => obj[item] ? obj[item]++ : obj[item] = 1)
  const num = Object.values(obj)
  const min = num.sort()[0]
  return min < 2 ? false : !num.some(item => gcd(item, min) === 1)
};
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]))
console.log(hasGroupsSizeX([1]))
console.log(hasGroupsSizeX([1, 1]))
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]))
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]))
