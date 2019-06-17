let stack = []
function push(node) {
  stack.push(node)
}
function pop() {
  return stack.pop()
}
function top() {
  return stack.slice(-1)[0]
}
function min() {
  return Math.min(...stack)
}