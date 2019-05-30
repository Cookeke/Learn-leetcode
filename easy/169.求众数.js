/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // let n = Math.ceil(nums.length / 2)
  // let obj = {}
  // return n === 1 ? nums[0] : nums.find(item => obj[item] ? ++obj[item] === n : !(obj[item] = 1))
  return nums.sort()[nums.length / 2 ^ 0]
};
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([1]))