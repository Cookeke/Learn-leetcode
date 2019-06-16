class MinStack {
  constructor() {
    this.stack = []
  }
  push(x) {
    this.stack.push(x)
  }
  pop() {
    this.stack.pop()
  }
  top() {
    return this.stack[this.stack.length - 1]
  }
  getMin() {
    return Math.min(...this.stack)
  }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */