/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length;
  if (len < 2)  return len;
  let i = 0;
  for (let j = 1; j < len; ++j) {
      if (nums[j] !== nums[i]) {
          ++i;
          if (j > i) {
              nums[i] = nums[j];
          }
      }
  }
  nums.length = i + 1;
  return nums.length;
};