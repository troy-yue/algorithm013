/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const len = triangle.length;
  if (!len)   return 0;
  if (len === 1)  return triangle[0][0] || 0;
  for (let i = triangle.length - 2; i >= 0; --i) {
      for (let j = triangle[i].length - 1; j >= 0; --j) {
          triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1]);
      }
  }
  return triangle[0][0];
};