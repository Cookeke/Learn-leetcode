function maxInWindows(num, size) {
  if (size === 0) return []
  const window = []
  const max = []
  for (let i = 0; i < num.length + 1 - size; i++) {
    const temp = []
    for (let j = i; j < i + size; j++) {
      temp.push(num[j])
    }
    window.push(temp)
  }
  window.forEach(item => max.push(Math.max(...item)))
  return max
}
console.log(maxInWindows([2, 3, 4, 2, 6, 2, 5, 1], 3))
