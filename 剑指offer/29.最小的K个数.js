function GetLeastNumbers_Solution(input, k) {
  return k > input.length ? [] : input.sort().splice(0, k)
}