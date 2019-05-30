/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const fl = { '(': ')', '{': '}', '[': ']', }
  const fr = { ')': '(', '}': '{', ']': '[', }
  let cache = []
  for (let v of s) {
    if (fl[v]) {
      cache.splice(0, 0, v)
    } else {
      if (cache && cache[0] === fr[v]) {
        cache.splice(0, 1)
      } else {
        return false
      }
    }
  }
  return cache.length === 0
};
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))
console.log(isValid("["))
console.log(isValid("(("))