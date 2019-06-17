function Fibonacci(n) {
  const arr = [0, 1]
  if (n > 1) {
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 1] + arr[i - 2])
    }
  }
  return arr[n]
}
