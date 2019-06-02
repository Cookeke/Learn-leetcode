/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  // if (nums.length < 2) return 0
  // nums.sort((a, b) => a - b)
  // let max = 0
  // for (let i = 0, len = nums.length; i < len - 1; i++) {
  //   max = nums[i + 1] - nums[i] > max ? nums[i + 1] - nums[i] : max
  // }
  // return max

  if (nums.length < 2) return 0
  let max = 0
  let len = nums.length - 1
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
    }
    if (i < len) {
      let space = nums[i + 1] - nums[i]
      space > max && (max = space)
    }
  }
  return Math.max(max, nums[1] - nums[0])
};
console.log(maximumGap([3, 6, 9, 1]))
console.log(maximumGap([10]))
console.log(maximumGap([1, 3, 100]))