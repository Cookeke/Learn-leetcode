/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const arr = [...nums]
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i] - 1] > 0 && (arr[nums[i] - 1] *= -1)
  }
  return arr.map((item, index) => item > 0 && index + 1).filter(Number)
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
