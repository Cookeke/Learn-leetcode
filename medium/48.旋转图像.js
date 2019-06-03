/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length
  for (let i = 0; i < len / 2; i++) {
    for (let j = 0; j < len; j++) {
      [matrix[i][j], matrix[len - 1 - i][j]] = [matrix[len - 1 - i][j], matrix[i][j]]
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  return matrix
};
console.log(rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
// console.log(rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16]
// ]))