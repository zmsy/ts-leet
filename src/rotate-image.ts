/**
 * You are given an n x n 2D matrix representing an image,
 * rotate the image by 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you
 * have to modify the input 2D matrix directly. DO NOT
 * allocate another 2D matrix and do the rotation.
 */
export function rotate(matrix: number[][]): void {

  // first reverse the outer array.
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      const b = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = b;
    }
  }
};
