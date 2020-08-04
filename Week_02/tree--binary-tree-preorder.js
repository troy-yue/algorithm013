/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const stack = [];
  const res = [];
  while (root || stack.length) {
      while (root) {
          res.push(root.val);
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      root = root.right;
  }
  return res;
};