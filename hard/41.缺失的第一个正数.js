/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = Array.from(new Set(nums.sort((a, b) => a - b)))
  let index = 1
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) {
      if (nums[i] === index) {
        index++
      } else {
        return index
      }
    }
  }
  return index
};
console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([7, 8, 9, 11, 12]))
console.log(firstMissingPositive([0, 2, 2, 1, 1]))
console.log(firstMissingPositive([1000, -1]))