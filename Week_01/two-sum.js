/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  for (let i = 0; i < nums.length; ++i) {
      const gap = target - nums[i];
      if (map[nums[i]] >= 0 && map[nums[i]] !== i) {
          return [map[nums[i]], i];
      } else {
          map[gap] = i;
      }
  }
  return [];
};