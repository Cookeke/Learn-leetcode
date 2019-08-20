const func = (string) => {
  function recursive(string, temp = '') {
    string.length === 0 && result.push(temp)
    for (let i = 0; i < string.length; i++) {
      const newString = string.slice(0, i) + string.slice(i + 1)
      recursive(newString, temp + string[i])
    }
  }
  const result = []
  recursive(string)
  return result
}
console.log(func('abc'))
