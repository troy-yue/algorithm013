

var dfs = function(grid, i, j, width, height) {
  if (i < 0 || j < 0 || i >= width || j >= height || grid[i][j] === '0') {
      return ;
  }

  grid[i][j] = '0';
  if (i - 1 >= 0)
      dfs(grid, i - 1, j, width, height);
  if (j - 1 >= 0)
      dfs(grid, i, j - 1, width, height);
  if (i + 1 < width)
      dfs(grid, i + 1, j, width, height);
  if (j + 1 < height)
      dfs(grid, i, j + 1, width, height);

  return ;
}

/**
* @param {character[][]} grid
* @return {number}
*/
var numIslands = function(grid) {
  const width = grid.length;
  if (width === 0)  return 0;
  const height = grid[0].length;
  if (height === 0)   return 0;
  let res = 0;

  for (let i = 0; i < width; ++i) {
      for (let j = 0; j < height; ++j) {
          if ('1' === grid[i][j]) {
              ++res;
              dfs(grid, i, j, width, height);
          }
      }
  }
  return res;
};