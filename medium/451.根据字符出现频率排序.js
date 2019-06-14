/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const arr = []
  s.split('').forEach(item1 => {
    if (!arr.some(item2 => item2.val === item1 && item2.num++)) {
      arr.push({ val: item1, num: 1 })
    }
  })
  return arr.sort((a, b) => b.num - a.num).reduce((a, b) => a + b.val.repeat(b.num), '')
};
console.log(frequencySort("tree"))
console.log(frequencySort("cccaaa"))
console.log(frequencySort("Aabb"))
