/**
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right, which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 */
export function minPathSum(grid: number[][]): number {
  if (grid.length === 0 || grid[0].length === 0) {
    return -1;
  }

  const m = grid.length;
  const n = grid[0].length;
  const mins = Array(m)
    .fill(null)
    .map(() => Array(n).fill(Infinity));

  const neighbors = (i: number, j: number): Array<[number, number]> => {
    const vals: Array<[number, number]> = [
      [i - 1, j],
      [i, j - 1],
    ];
    return vals.filter(([x, y]) => x >= 0 && x < m && y >= 0 && y < n);
  };

  // iterate through every instance and cache the minimum at each point
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const nei = neighbors(i, j);

      // top-left most value, has no potential neighbors.
      if (nei.length === 0) {
        mins[i][j] = grid[i][j];
      }
      // values on upper edges just use the only available neighbor.
      else if (nei.length === 1) {
        const n = nei[0];
        mins[i][j] = mins[n[0]][n[1]] + grid[i][j];
      }
      // values with two potential ones use the minimum
      else {
        const n1 = nei[0];
        const n2 = nei[1];
        const min = Math.min(mins[n1[0]][n1[1]], mins[n2[0]][n2[1]]);
        mins[i][j] = min + grid[i][j];
      }
    }
  }

  return mins[m - 1][n - 1];
}
