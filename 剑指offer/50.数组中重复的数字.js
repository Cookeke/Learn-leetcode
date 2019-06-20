function duplicate(numbers, duplication) {
  const obj = {}
  for (let i = 0; i < numbers.length; i++) {
    if (obj[numbers[i]]) {
      duplication[0] = numbers[i]
      return true
    } else {
      obj[numbers[i]] = 1
    }
  }
  return false
}
console.log(duplicate([2, 3, 1, 0, 2, 5, 3]))
