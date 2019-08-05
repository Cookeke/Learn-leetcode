/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const arr = []
  for (let i = 1; i < n + 1; i++) {
    let flag = i
    if (i % 3 === 0) {
      flag = 'Fizz'
    } else if (i % 5 === 0) {
      flag = 'Buzz'
    }
    if (i % 3 === 0 && i % 5 === 0) {
      flag = 'FizzBuzz'
    }
    arr.push(String(flag))
  }
  return arr
};

console.log(fizzBuzz(15))