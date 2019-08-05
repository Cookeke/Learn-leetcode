/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const number1 = num1.split('').reverse().map(Number)
  const number2 = num2.split('').reverse().map(Number)
  const length = Math.max(number1.length, number2.length)
  const result = []
  let flag = 0
  for (let i = 0; i < length + 1; i++) {
    const item1 = number1[i] ? number1[i] : 0
    const item2 = number2[i] ? number2[i] : 0
    const count = item1 + item2 + flag
    if (count >= 10) {
      result.push(count - 10)
      flag = 1
    } else {
      result.push(count)
      flag = 0
    }
  }
  return result.reverse()[0] === 0
    ? result.join('').slice(1)
    : result.join('')
};
console.log(addStrings("123456789", "987654321"))
console.log(addStrings("0", "0"))
console.log(addStrings("6", "501"))
console.log(addStrings("18582506933032752", "366213329703"))