function Sum_Solution(n) {
  n && (n += Sum_Solution(n - 1))
  return n
}