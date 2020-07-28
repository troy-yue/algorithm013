/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let added = 1;
  for (let i = digits.length - 1; i >= 0; --i) {
      if (digits[i] + added > 9) {
          digits[i] = 0;
          added = 1;
          if (i === 0) {
              digits.unshift(1);
              break;
          }
      } else {
          added = 0;
          digits[i] += 1;
          break;
      }
  }
  return digits;
};