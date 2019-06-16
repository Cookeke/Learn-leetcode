/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  for (let i = nums.length - 2; i >= 0; i--) {
    nums[i] = Math.max(nums[i] + (nums[i + 2] ? nums[i + 2] : 0), nums[i + 1])
  }
  return nums[0]
};
console.log(rob([1, 2, 3, 1]))
console.log(rob([0]))
