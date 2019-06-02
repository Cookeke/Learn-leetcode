/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
  // const length = nums.length
  // for (let i = length - 1; i > length - k - 1; i--) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[j] > nums[j + 1]) {
  //       [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
  //     }
  //   }
  // }
  // return nums[length - k]
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))