/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length)   return null;
  if (preorder.length === 1)  return new TreeNode(preorder[0]);

  const curRoot = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]);
  
  curRoot.left = index > 0 ? buildTree(preorder.slice(1, index + 1), inorder.slice(0, index)) : null;
  curRoot.right = index < preorder.length - 1 ? buildTree(preorder.slice(index + 1), inorder.slice(index + 1)) : null;

  return curRoot;
};