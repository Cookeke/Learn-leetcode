/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0
  function max(heights) {
    const result = []
    for (let i = 0; i < heights.length; i++) {
      let height = heights[i]
      let li = ri = i
      let leftCount = rightCount = 0
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
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = parseInt(matrix[i][j])
      if (i !== 0 && matrix[i][j] !== 0 && matrix[i - 1][j] !== 0) {
        matrix[i][j] += matrix[i - 1][j]
      }
    }
  }
  return matrix.reduce((a, b) => a > max(b) ? a : max(b), 0)
};
console.log(maximalRectangle([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]))
console.log(maximalRectangle([
  ["0", "1"],
  ["1", "0"]
]))