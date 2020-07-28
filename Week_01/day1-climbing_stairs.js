/**
 * @param {number} n
 * @return {number}
 */
// // 1. 暴力解法，逐个计算
// var climbStairs = function(n) {
//     if (n <= 2) return n;
//     const middleSteps = [1, 2];
//     for (let i = 2; i < n; ++i) {
//         if (i === n - 1) {
//             return middleSteps[i - 1] + middleSteps[i - 2];
//         }
//         middleSteps.push(middleSteps[i - 1] + middleSteps[i - 2]);
//     }
// };

// 1.1 优化空间复杂度
var climbStairs = function(n) {
  if (n <= 2) return n;
  let step2Count = 1;
  let step1Count = 2;
  for (let i = 3; i < n; ++i) {
      [step2Count, step1Count] = [step1Count, step1Count + step2Count];
  }
  return step1Count + step2Count;
}

// // 2. 递归解法
// const memo = {};
// var climbStairs = function(n) {
//     if (n <= 2) return n;
//     if (memo[n])    return memo[n];
//     memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
//     return memo[n];
// }