function GetNumberOfK(data, k) {
  const obj = {}
  data.forEach(item => obj[item] ? obj[item]++ : obj[item] = 1)
  return obj[k] || 0
}
console.log(GetNumberOfK([1, 2, 2, 2, 3, 4], 5))
