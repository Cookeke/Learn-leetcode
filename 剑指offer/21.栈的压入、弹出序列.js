function IsPopOrder(pushV, popV) {
  const stack = []
  let index = 0
  for (let i = 0; i < pushV.length; i++) {
    stack.push(pushV[i])
    while (stack.length !== 0 && stack.slice(-1)[0] == popV[index]) {
      stack.pop()
      index++
    }
  }
  return stack.length === 0
}