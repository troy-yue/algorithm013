/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins.sort((a, b) => a - b);
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; ++i) {
      for (let j = 0; j < coins.length && coins[j] <= i; ++j) {
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};