function MoreThanHalfNum_Solution(numbers) {
  let x = numbers.sort()[Math.floor(numbers.length / 2)]
  let count = 0
  numbers.forEach(item => item === x && count++)
  return count > numbers.length / 2 ? x : 0
}