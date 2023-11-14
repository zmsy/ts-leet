import { printMatrix } from "./_util";

/**
 * You are given an m x n grid where each cell can have one of three values:
 *
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten
 * orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange. If this is impossible, return -1.
 */
export function orangesRotting(grid: number[][]): number {
  if (grid.length === 0 || grid[0].length === 0) {
    return -1;
  }

  const m = grid.length;
  const n = grid[0].length;
  const inBounds = (t1: number, t2: number): boolean =>
    t1 >= 0 && t1 < m && t2 >= 0 && t2 < n;
  const directions: Array<[number, number]> = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // iterate over the array as many times as required, and count the number of
  // oranges that were rotted at each iteration.
  let iterations = 0;
  let rotted = true;
  while (rotted) {
    iterations += 1;
    printMatrix(grid);
    const toRot: Array<[number, number]> = [];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 2) {
          for (const [plusX, plusY] of directions) {
            const nX = i + plusX;
            const nY = j + plusY;
            if (inBounds(nX, nY) && grid[nX][nY] === 1) {
              toRot.push([nX, nY]);
            }
          }
        }
      }
    }

    for (const [rX, rY] of toRot) {
      grid[rX][rY] = 2;
    }

    // if we rotted any, just continue
    if (toRot.length === 0) {
      rotted = false;
    }
  }

  // check to see how many there are that aren't rotten.
  let freshCount = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        freshCount += 1;
      }
    }
  }

  // if we saw fresh oranges and we didn't rot any new ones, return -1 because
  // this will never get solved.
  if (freshCount > 0) {
    return -1;
  }

  // the last iteration doesn't actually rot any oranges.
  return iterations - 1;
}
