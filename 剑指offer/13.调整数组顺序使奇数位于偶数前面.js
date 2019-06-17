function reOrderArray(array) {
  const odd = []
  const even = []
  array.forEach(item => {
    item % 2 === 0 ? even.push(item) : odd.push(item)
  })
  return odd.concat(even)
}
