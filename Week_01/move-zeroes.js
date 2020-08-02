/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let lastP = 0;
  let count0 = 0;
  for (let i = 0; i < nums.length; ++i) {
      if (nums[i] !== 0) {
          nums[lastP++] = nums[i];
      } else {
          count0++;
      }
  }
  for (let i = lastP; i < nums.length; ++i) {
      nums[i] = 0;
  }
  return nums;
};