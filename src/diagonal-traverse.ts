/**
 * Given an m x n matrix mat, return an array of all the elements of the array
 * in a diagonal order.
 */
export function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0]?.length ?? 0;
  if (m === 0 || n === 0) {
    return [];
  }

  const output: number[] = [];
  const directions = [
    [-1, 1], // up and to the right
    [1, -1], // down and to the left
  ];
  let i = 0;
  let j = 0;
  let dir = directions[0];

  // each iteration, we do one pass up right and one pass down left.
  let iter = 1;
  while (output.length < m * n) {
    console.log(`iter${iter}, pass1 init - at ${i},${j}`);
    output.push(mat[i][j]);

    // pass 1: move top right
    dir = directions[0];
    while (i > 0 && j < n - 1) {
      i += dir[0];
      j += dir[1];
      console.log(`iter${iter}, pass1 - at ${i},${j} - adding ${mat[i][j]}`);
      output.push(mat[i][j]);
    }

    // check to see if we hit top-right corner, if so head down
    if (j >= n - 1) {
      i += 1;
    } else {
      // just hit top
      j += 1;
    }

    // early return to handle output len
    if (output.length >= m * n) {
      break;
    }

    // pass 2: move bottom left
    console.log(`iter${iter}, pass2 init - at ${i},${j} - adding ${mat[i][j]}`);
    output.push(mat[i][j]);

    dir = directions[1];
    while (j > 0 && i < m - 1) {
      i += dir[0];
      j += dir[1];
      console.log(`iter${iter}, pass2 - at ${i},${j} - adding ${mat[i][j]}`);
      output.push(mat[i][j]);
    }

    // check to see if we hit bottom-left corner, if so head right
    if (i >= m - 1) {
      j += 1;
    } else {
      i += 1;
    }

    iter++;
  }

  return output;
}
