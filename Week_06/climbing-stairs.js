/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 1) return n;
  let last = 1;
  let cur = 1;
  for (let i = 2; i <= n; ++i) {
      [cur, last] = [last + cur, cur];
  }
  return cur;
};

