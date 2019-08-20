/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  function recursive(nums, temp = []) {
    nums.length === 0 && result.push(temp)
    for (let i = 0; i < nums.length; i++) {
      const newTemp = [...temp, nums[i]]
      const newNums = [...nums]
      newNums.splice(i, 1)
      recursive(newNums, newTemp)
    }
  }
  const result = []
  recursive(nums)
  return result
};
console.log(permute([1, 2, 3]))