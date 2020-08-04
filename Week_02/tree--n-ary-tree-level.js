/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root)  return [];
  const res = [];
  let stack = [root];
  while (stack.length) {
      let level = [];
      let len = stack.length;
      while (len-- > 0) {
          root = stack.shift();
          if (root) {
              level.push(root.val);
              stack = stack.concat(root.children);
          }
      }
      res.push(level);
  }
  return res;
};