/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const as = [];
  //中序遍历函数
  function minrecure(roots) {
    if (roots === null) return;
    roots.left && minrecure(roots.left);
    as.push(roots.val);
    roots.right && minrecure(roots.right);
  }
  minrecure(root);
  // 若是有相同数字，则该排序比不同则无法测出；
  // return JSON.stringify(as.slice().sort((a,b) => (a-b))) === JSON.stringify(as); 
  for (let i = 0; i < as.length - 1; i++) {
    if (as[i] >= as[i + 1]) return false
  }
  return true

  // if (!root) return false
  // const walk = (root) => {
  //   if (!root.left && !root.right) {
  //     return true
  //   } else if ((root.left && root.val < root.left.val) || (root.right && root.val > root.right.val)) {
  //     return false
  //   } else {
  //     return walk(root.left) && walk(root.right)
  //   }
  // }
  // return walk(root)
};
console.log(isValidBST({
  val: 1,
  right: null,
  left: {
    val: 1,
    right: null,
    left: null
  }
}))
