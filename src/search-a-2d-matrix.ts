/**
 * Searching a sorted 2D matrix is effectively the same thing as a regular
 * matrix, but it requires you to calculate the row offset when searching.
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) {
    return false;
  } else if (matrix[0].length === 0) {
    return false;
  }

  // initialize pointers at either end
  const m = matrix.length;
  const n = matrix[0].length;
  let lo = 0;
  let hi = m * n - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const x = Math.floor(mid / m);
    const y = Math.floor(mid % n);
    const val = matrix[x][y];

    if (val === target) {
      return true;
    } else if (val > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return false;
}
