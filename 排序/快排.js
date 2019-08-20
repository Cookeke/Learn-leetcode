const quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

var quickSort = function (arr) {
  if (arr.length <= 1) return arr
  var point = arr.splice(Math.floor(arr.length / 2), 1)[0]
  var left = [], right = []
  for (let item of arr) {
    item < point ? left.push(item) : right.push(item)
  }
  return quickSort(left).concat(point, quickSort(right))
}

console.log(quickSort([34, 33, 1, 67, 8, 90, 4, 55]))