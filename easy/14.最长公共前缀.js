/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  const compare = (a, b) => {
    let str = ''
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] === b[i]) {
        str += a[i]
      } else {
        break
      }
    }
    return str
  }
  return strs.reduce((a, b) => compare(a, b))
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
