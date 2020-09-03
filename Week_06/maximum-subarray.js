/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let sum = nums[0];
//   let curSum = nums[0];
//   const len = nums.length;
//   if (len < 2)    return nums[0];
//   for (let i = 1; i < nums.length; ++i) {
//       if (curSum < 0 && curSum < nums[i]) {
//           curSum = nums[i];
//       } else {
//           curSum += nums[i];
//       }
//       sum = Math.max(sum, curSum);
//       if (curSum <= 0) {
//           curSum = 0;
//       }
//   }
//   return sum;
// };

var maxSubArray = function(nums) {
  let res = nums[0];
  let sum = 0;
  nums.forEach((num) => {
      sum = Math.max(sum + num, num);
      res = Math.max(sum, res);
  })
  return res;
};