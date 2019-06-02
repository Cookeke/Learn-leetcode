/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
class MyCircularQueue {
  constructor(k) {
    this.list = Array(k)
    this.front = 0
    this.rear = 0
    this.length = k
  }
  /**
   * Insert an element into the circular queue. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) {
      return false
    } else {
      this.list[this.rear] = value
      this.rear = (this.rear + 1) % this.length
      return true
    }
  }
  /**
   * Delete an element from the circular queue. Return true if the operation is successful.
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) {
      return false
    } else {
      this.list[this.front] = ''
      this.front = (this.front + 1) % this.length
      return true
    }
  }
  /**
   * Get the front item from the queue.
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) {
      return -1
    } else {
      return this.list[this.front]
    }
  }
  /**
   * Get the last item from the queue.
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) {
      return -1
    } else {
      const rear = this.rear - 1
      return this.list[rear < 0 ? this.length - 1 : rear]
    }
  }
  /**
   * Checks whether the circular queue is empty or not.
   * @return {boolean}
   */
  isEmpty() {
    return this.front === this.rear && !this.list[this.front]
  }
  /**
   * Checks whether the circular queue is full or not.
   * @return {boolean}
   */
  isFull() {
    return this.front === this.rear && !!this.list[this.front]
  }
}
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

let circularQueue = new MyCircularQueue(3) // 设置长度为 3
console.log(
  circularQueue.enQueue(1),  // 返回 true
  circularQueue.enQueue(2),  // 返回 true
  circularQueue.enQueue(3),  // 返回 true
  circularQueue.enQueue(4),  // 返回 false，队列已满
  circularQueue.Rear(),  // 返回 3
  circularQueue.isFull(),  // 返回 true
  circularQueue.deQueue(),  // 返回 true
  circularQueue.enQueue(4),  // 返回 true
  circularQueue.Rear()  // 返回 4
)
