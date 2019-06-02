/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  if (heights.length === 0) return 0
  let result = []
  for (let i = 0; i < heights.length; i++) {
    let height = heights[i]
    let li = i, ri = i
    let leftCount = 0
    let rightCount = 0
    while (heights[li - 1] >= height) {
      leftCount++
      li--
    }
    while (heights[ri + 1] >= height) {
      rightCount++
      ri++
    }
    result.push((leftCount + rightCount + 1) * height)
  }
  return Math.max(...result)
};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([]))