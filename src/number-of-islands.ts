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
  // must be at least a 1x1 grid in order to work.
  if (grid.length === 0) return 0;
  if (grid[0].length === 0) return 0;

  // dimensions. m = height, n = width
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Set<string>();
  const coordStr = (i: number, j: number) => `${i}.${j}`;
  let islands = 0;

  // depth first search marking off every visited islands into
  // the `visited` set.
  const dfs = (i: number, j: number) => {
    const stack: Array<[number, number]> = [[i, j]];
    while (stack.length > 0) {
      // pop from the stack so that it's DFS
      const coords = stack.pop()!;
      visited.add(coordStr(...coords));

      // search through all of the neighbors after this node.
      const neighbors = getNeighbors(...coords);
      for (const neighbor of neighbors) {
        const coords = coordStr(...neighbor);
        if (!visited.has(coords) && grid[neighbor[0]][neighbor[1]] === "1") {
          stack.push(neighbor);
        }
      }
    }
  };

  /**
   * Return all of the valid neighbors for this particular
   * coordinate, limiting to the existing spaces.
   */
  const getNeighbors = (i: number, j: number): Array<[number, number]> => {
    const neighbors: Array<[number, number]> = [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ];
    return neighbors.filter(([i, j]) => i >= 0 && j >= 0 && i < m && j < n);
  };

  // loop through all of the available spaces
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !visited.has(coordStr(i, j))) {
        islands += 1;
        dfs(i, j);
      }
    }
  }

  return islands;
}
