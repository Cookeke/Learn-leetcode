function jumpFloorII(number) {
  const arr = [1, 1]
  if (number > 1) {
    for (let i = 2; i < number + 1; i++) {
      arr.push(2 * arr[i - 1])
    }
  }
  return arr[number]
}
console.log(jumpFloorII(3))
