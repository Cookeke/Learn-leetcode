function LeftRotateString(str, n) {
  if (!str) return ''
  return str.substr(n) + str.substr(0, n)
}
console.log(LeftRotateString('abcXYZdef', 3))
console.log(LeftRotateString('abcdefg', 2))
