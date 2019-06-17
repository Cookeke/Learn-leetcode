function FindNumbersWithSum(array, sum) {
  let i = 0
  let j = array.length - 1
  let res = []
  while (i < j) {
    const num = array[i] + array[j]
    if (num === sum) {
      res = [array[i], array[j]]
      break
    } else if (num > sum) {
      j--
    } else if (num < sum) {
      i++
    }
  }
  return res
}

