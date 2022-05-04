/**
 * Given an m x n 2D binary grid grid which represents a
 * map of '1's (land) and '0's (water), return the
 * number of islands.
 *
 * An island is surrounded by water and is formed by
 * connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all
 * surrounded by water.
 */
export function numIslands(grid: string[][]): number {
  if (!grid.length) return 0;
  if (!grid[0].length) return 0;

  // visited islands are serialized as a set of coordinates {0}.{1}
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Set<string>();
  const coords = (i: number, j: number) => `${i}.${j}`;
  let islands = 0;

  // neighbors getter helper function
  const getNeighbors = (i: number, j: number): Array<[number, number]> => {
    const neighbors: Array<[number, number]> = [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ];
    return neighbors.filter(([i, j]) => {
      return i >= 0 && i < m && j >= 0 && j < n;
    });
  };

  // depth first search helper function
  const dfs = (i: number, j: number): void => {
    const stack: Array<[number, number]> = [[i, j]];
    while (stack.length > 0) {
      const node = stack.pop()!;
      visited.add(coords(...node));
      const neighbors = getNeighbors(...node);
      for (const n of neighbors) {
        if (grid[n[0]][n[1]] === "1" && !visited.has(coords(...n))) {
          stack.push(n);
        }
      }
    }
  };

  // loop through the grid and dfs at each point we reach an island.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visited.has(coords(i, j))) {
        islands += 1;
        dfs(i, j);
      }
    }
  }

  return islands;
}
