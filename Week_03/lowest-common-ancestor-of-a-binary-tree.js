/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// // 1. 直接遍历
// var lowestCommonAncestor = function(root, p, q) {
//     let ans;
//     const dfs = (root, p, q) => {
//         if (!root) return false;
//         const lson = dfs(root.left, p, q);
//         const rson = dfs(root.right, p, q);
//         if ((lson && rson) || ((lson || rson) && (root.val === p.val || root.val === q.val))) {
//             ans = root;
//         }
//         return lson || rson || (root.val === p.val || root.val === q.val);
//     };
//     dfs(root, p, q);
//     return ans;
// };

// 2. 先遍历一遍记录父节点
var lowestCommonAncestor = function(root, p, q) {
  const map = {};
  const dfs = (root, p, q) => {
      if (root.left) {
          map[root.left.val] = root;
          dfs(root.left, p, q);
      }
      if (root.right) {
          map[root.right.val] = root;
          dfs(root.right, p, q);
      }
  };

  if (!root)  return false;
  map[root.val] = null;
  const res = {};
  dfs(root, p, q);
  while(map[p.val]) {
      res[p.val] = true;
      p = map[p.val];
  }
  while (map[q.val]) {
      if (res[q.val]) {
          return q;
      }
      res[q.val] = true;
      q = map[q.val];
  }
  return root;
}