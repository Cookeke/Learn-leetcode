function jumpFloor(number) {
  // const jump = (n) => {
  //   if (n === 1) return 1
  //   if (n === 2) return 2
  //   return jump(n - 1) + jump(n - 2)
  // }
  // return jump(number)
  const arr = [1, 2]
  if (number > 2) {
    for (let i = 2; i < number; i++) {
      arr.push(arr[i - 1] + arr[i - 2])
    }
  }
  return arr[number - 1]
}