/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let code = []
  digits.split('').forEach(item => { if (map[item]) code.push(map[item]) })
  if (code.length === 1) return code[0].split('')
  let comb = (arr) => {
    let temp = []
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, temp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return temp
    }
    return arr[0]
  }
  return comb(code)
}
console.log(letterCombinations('23'))
console.log(letterCombinations('234'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))