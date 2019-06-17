/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2).sort((a, b) => a - b)
  const length = arr.length
  if (length % 2 === 0) {
    return (arr[length / 2] + arr[length / 2 - 1]) / 2
  } else {
    return arr[(length - 1) / 2]
  }
};
console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
