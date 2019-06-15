/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [1]
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1]
  }
  let k = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] *= k
    k *= nums[i]
  }
  return result
};
console.log(productExceptSelf([1, 2, 3, 4]))
