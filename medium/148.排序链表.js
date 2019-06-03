/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class Node {
  constructor(val) {
    this.val = val
    this.next = undefined
  }
}

class NodeList {
  constructor(arr) {
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}

const swap = (p, q) => { [p.val, q.val] = [q.val, p.val] }

const partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  swap(p, begin)
  return p
}

const sort = (begin, end) => {
  if (begin !== end) {
    let part = partion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}

var sortList = function (head) {
  if (!head) return head
  // let listHead = new NodeList(head)
  // sort(listHead)
  // sort(head)
  // const res = []
  // let next = listHead
  let next = head
  while (next) {
    // res.push(next.val)
    if (next.next === null) {
      next.next = undefined
    }
    next = next.next
  }
  sort(head)
  return head
};

console.log(sortList({
  val: 4,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 3,
        next: null
      }
    }
  }
}))