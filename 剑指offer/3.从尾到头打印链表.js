/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  let next = head
  const res = []
  while (next) {
    res.push(next.val)
    next = next.next
  }
  return res.reverse()
}

