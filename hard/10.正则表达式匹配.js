/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  return s === (s.match(new RegExp(p)) ? s.match(new RegExp(p))[0] : null)
  
  // 对模式变量进行正则筛选
  let modeArr = p.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g)
  let cur = 0
  let strlen = s.length
  // if (modeArr.length === 1) return true
  for (let i = 0, len = modeArr.length, m; i < len; i++) {
    // 对于模式分为三类，.*|a*|cdef
    m = modeArr[i].split('')
    // 如果第二位是*表示是有模式的
    if (m[1] === '*') {
      if (m[0] === '.') {
        cur = strlen
        break
      } else {
        while (s[cur] === m[0]) {
          cur++
        }
      }
    } else {
      for (let j = 0, jl = m.length; j < jl; j++) {
        if (m[j] !== s[cur]) {
          return false
        } else {
          cur++
        }
      }
    }
  }
  return cur === strlen
};
console.log(isMatch("aa", "a"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("ab", ".*"))
console.log(isMatch("aab", "c*a*b*"))
console.log(isMatch("mississippi", "mis*is*p*."))
console.log(isMatch("aa", "."))