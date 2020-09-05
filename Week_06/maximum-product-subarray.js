/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let curMax = 1;
  let curMin = 1;
  let curRes = nums[0];
  for (let i = 0; i < nums.length; ++i) {
      [curMax, curMin] = [Math.max(curMax * nums[i], Math.max(nums[i], curMin * nums[i])), Math.min(curMin * nums[i], Math.min(nums[i], curMax * nums[i]))];

      curRes = Math.max(curMax, curRes);
  }
  return curRes;
};