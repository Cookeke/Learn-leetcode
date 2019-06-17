function PrintMinNumber(numbers) {
  numbers = numbers.map(String).sort((a, b) => a - b)
  for (let i = 1; i < numbers.length; i++) {
    let a = Number(('' + numbers[i - 1] + numbers[i]))
    let b = Number(('' + numbers[i] + numbers[i - 1]))
    if (b < a) {
      [numbers[i - 1], numbers[i]] = [numbers[i], numbers[i - 1]]
      i = i - 2
    }
  }
  return numbers.join('')
}
console.log(PrintMinNumber([3, 5, 1, 4, 2]))
console.log(PrintMinNumber([3, 32, 321]))
