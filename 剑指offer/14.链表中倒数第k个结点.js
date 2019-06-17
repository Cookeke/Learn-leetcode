/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  let val = [];
  while (head) {
    val.unshift(head);
    head = head.next;
  }
  return val[k - 1];
}
