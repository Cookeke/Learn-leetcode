function multiply(array) {
  const b = []
  for (let i = 0; i < array.length; i++) {
    let temp = 1
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        temp *= array[j]
      }
    }
    b.push(temp)
  }
  return b
}
