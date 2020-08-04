/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归写法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const visitTree = (node) => {
    let res = [];
    if (!node) return res;

    if(node.left) {
        res = res.concat(visitTree(node.left));
    }
    res.push(node.val);
    if(node.right) {
        res = res.concat(visitTree(node.right));
    }
    return res;
  };

  return visitTree(root);
};

/**
 * 迭代写法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalIteration = function(root) {
  const stack = [];
  const res = [];
  while (root || stack.length) {
      while (root) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      res.push(root.val);
      root = root.right;
  }
  return res;
}