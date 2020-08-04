/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const stack = [root];
  const res = [];
  while (stack.length) {
      root = stack.pop();
      if (root)   res.push(root.val);
      (root ? root.children : []).forEach(c => {
          stack.push(c);
      });
  }
  return res.reverse();
  
  return res;
};