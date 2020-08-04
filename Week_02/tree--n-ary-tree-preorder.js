/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root)  return [];

  const res = [root.val];
  let queue = root.children;
  while (queue.length > 0) {
      root = queue.shift();
      root && res.push(root.val);
      if (root.children) {
          queue.unshift(...root.children);
      }
  }
  return res;
};