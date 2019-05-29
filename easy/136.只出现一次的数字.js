/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map()
  nums.forEach(item => map.has(item) ? map.delete(item) : map.set(item))
  return [...map][0][0]
};
console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))