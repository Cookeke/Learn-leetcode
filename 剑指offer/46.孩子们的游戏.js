function LastRemaining_Solution(n, m) {
  let arr = Array(n).fill(1)
  let count = 0
  while (n !== 1) {
    while (count < m - 1) {
      count++
    }
    n--
  }
  return arr.indexOf(1)
}
console.log(LastRemaining_Solution(3, 1))
