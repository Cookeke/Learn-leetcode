class MyStack {
  constructor() {
    this.stack = []
  }
  push(x) {
    this.stack.push(x)
  }
  pop() {
    return this.stack.pop()
  }
  top() {
    return this.stack.slice(-1)[0]
  }
  empty() {
    return this.stack.length === 0
  }
}