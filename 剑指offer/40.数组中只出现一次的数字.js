function FindNumsAppearOnce(array) {
  const obj = {}
  array.forEach(item => obj[item] ? delete obj[item] : obj[item] = 1)
  return Object.keys(obj).map(Number)
}
console.log(FindNumsAppearOnce([1,2,2,3,4,4]))
