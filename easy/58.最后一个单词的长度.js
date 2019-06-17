/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(' ').filter(Boolean)
  return arr.length < 1 ? 0 : arr.slice(-1)[0].length
};
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("a    "))
