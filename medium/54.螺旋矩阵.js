/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const recur = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) {
        r = r.concat(arr[i])
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse())
      } else {
        arr[i].length && r.push(arr[i].pop())
      }
    }
    arr.shift()
    arr.pop()
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i].length && r.push(arr[i].shift())
    }
    return arr.length ? recur(arr, r) : r
  }
  return recur(matrix)
};
console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]))
