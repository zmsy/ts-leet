/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for
 * each cell.
 *
 * The distance between two adjacent cells is 1.
 */
export function updateMatrix(mat: number[][]): number[][] {
  if (mat.length === 0 || mat[0].length === 0) {
    return mat;
  }

  const m = mat.length;
  const n = mat[0].length;
  // dfs queue. this is for storing all the coords and their distances.
  const queue: Array<[[number, number], number]> = [];

  // initialize our result matrix. the idea is that anything that's a 0 has
  // zero length, but anything that's a 1 will be written upon
  const output = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        output[i][j] = 0;
        queue.push([[i, j], 0]);
      }
    }
  }

  const inBounds = (a1: number, a2: number): boolean =>
    a1 >= 0 && a1 < m && a2 >= 0 && a2 < n;
  const directions: Array<[number, number]> = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [[i, j], distance] = queue.shift()!;
    for (const [plusX, plusY] of directions) {
      const nX = i + plusX;
      const nY = j + plusY;
      if (inBounds(nX, nY) && output[nX][nY] === -1) {
        const newDistance = distance + 1;
        output[nX][nY] = newDistance;
        queue.push([[nX, nY], newDistance]);
      }
    }
  }

  return output;
}
