/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      index++
      nums.splice(i--, 1)
    }
  }
  let v = '0'.repeat(index).split('').map(item => Number(item))
  nums.splice(nums.length, 0, ...v)
  return nums
};
console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0, 0, 1]))