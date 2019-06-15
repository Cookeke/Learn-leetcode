/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // const endX = obstacleGrid.length - 1
  // const endY = obstacleGrid[0].length - 1
  // const fun = (x, y) => {
  //   if (x < 0 || y < 0) return 0
  //   if (obstacleGrid[x][y] === 1) return 0
  //   if (x === 0 && y === 0) return 1
  //   return fun(x - 1, y) + fun(x, y - 1)
  // }
  // return fun(endX, endY)
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length]
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1]) return 0
  let [stopTop, stopLeft] = [false, false]
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] === 0) {
      obstacleGrid[0][i] = 1
    } else if (obstacleGrid[0][i] === 1) {
      stopTop = true
    }
    if (stopTop) {
      obstacleGrid[0][i] = 0
    }
  }
  for (let j = 1; j < m; j++) {
    if (obstacleGrid[j][0] === 0) {
      obstacleGrid[j][0] = 1
    } else if (obstacleGrid[j][0] === 1) {
      stopLeft = true
    }
    if (stopLeft) {
      obstacleGrid[j][0] = 0
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
      }
    }
  }
  return obstacleGrid[m - 1][n - 1]
};
console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]))
