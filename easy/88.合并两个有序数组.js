/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  return nums1.splice(0, m).concat(nums2).sort()

  // let count1 = 0
  // let count2 = 0
  // let len = nums1.length
  // while(count1 < m && count2 < n) {
  //     if(nums1[count1] > nums2[count2]) {
  //         nums1.push(nums2[count2++])
  //     } else {
  //         nums1.push(nums1[count1++])
  //     }
  // }
     
  // if(count1 < m) {
  //     nums1.splice(nums1.length, 0, ...nums1.slice(count1, m))
  // }
  
  // if(count2 < n) {
  //     nums1.splice(nums1.length, 0, ...nums2.slice(count2, n))
  // }
  
  //  nums1.splice(0,len)
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))