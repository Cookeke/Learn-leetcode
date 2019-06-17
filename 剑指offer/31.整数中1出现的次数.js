function NumberOf1Between1AndN_Solution(n) {
  let count = 0
  for (let i = 1; i < n + 1; i++) {
    String(i).split('').forEach(item => item == '1' && count++)
  }
  return count
}
console.log(NumberOf1Between1AndN_Solution(1))
console.log(NumberOf1Between1AndN_Solution(2))
console.log(NumberOf1Between1AndN_Solution(13))
