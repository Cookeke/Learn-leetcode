/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0
  if (s.length === 1) return 1
  let result = []
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (obj[s[j]]) {
        result.push(Object.keys(obj).join(''))
        obj = {}
        break
      } else {
        obj[s[j]] = true
      }
    }
  }
  result.sort((a, b) => b.length - a.length)
  return result[0].length
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))