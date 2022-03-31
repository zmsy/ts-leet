/**
 Do not return anything, modify matrix in-place instead.
 */
export function setMatrixZeroes(matrix: number[][]): void {
  // store rows and columns where there's a zero found
  const cols = new Set<number>();
  const rows = new Set<number>();

  let rowLen = 0;
  let colLen = 0;

  matrix.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      if (col === 0) {
        cols.add(colIdx);
        rows.add(rowIdx);
      }

      // update lengths for easy looping later
      rowLen = rowIdx;
      colLen = colIdx;
    });
  });

  for (let i = 0; i < rowLen + 1; i++) {
    for (let j = 0; j < colLen + 1; j++) {
      if (rows.has(i) || rows.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
