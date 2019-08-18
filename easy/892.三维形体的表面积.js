/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  var n = grid.length
  var m = grid[0].length

  var myArr = grid

  var result = 0
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      var point = Number(myArr[i][j])
      if (point > 0) {
        result += 4 * point + 2
      }
      if (i > 0) {
        result -= Math.min(point, Number(myArr[i - 1][j])) * 2
      }
      if (j > 0) {
        result -= Math.min(point, Number(myArr[i][j - 1])) * 2
      }
    }
  }

  return result
};
