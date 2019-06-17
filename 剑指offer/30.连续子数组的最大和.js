function FindGreatestSumOfSubArray(array) {
  for (let i = 1; i < array.length; i++) {
    array[i - 1] > 0 && (array[i] += array[i - 1])
  }
  return Math.max(...array)
}