function NumberOf1(n) {
  n < 0 && (n = n >>> 0)
  return n.toString(2).split('').reduce((a, b) => {
    b == 1 && a++
    return a
  }, 0)
}
console.log(NumberOf1(5))
console.log(NumberOf1(-3))
console.log(NumberOf1(-2147483648))
