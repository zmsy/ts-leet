/**
 * Given an m x n grid of characters board and a string word, return true if
 * word exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring. The same
 * letter cell may not be used more than once.
 */
export function exist(board: string[][], word: string): boolean {
  if (board.length === 0 || board[0].length === 0) {
    return false;
  }

  const m = board.length;
  const n = board[0].length;
  const coords = (i: number, j: number) => `${i}.${j}`;
  let charIdx = 0; // iterator for the word

  /** Return all neighbors for a given coordinate. */
  const getNeighbors = (i: number, j: number): Array<[number, number]> => {
    const vals: Array<[number, number]> = [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ];
    return vals.filter(([i, j]) => i >= 0 && j >= 0 && i < m && j < n);
  };

  /**
   * Recursive DFS in order to validate whether the word exists, plus pass the
   * existing state to the next recursive call.
   */
  const dfs = (
    i: number,
    j: number,
    idx: number,
    visited: Set<string>
  ): boolean => {
    visited.add(coords(i, j));
    // if this doesn't match the next letter, return early.
    if (board[i][j] !== word[idx]) {
      return false;
    }

    // success case, if it's the final letter, return early.
    if (idx === word.length - 1) {
      return true;
    }

    const neighbors = getNeighbors(i, j).filter(([l, m]) => {
      return !visited.has(coords(l, m)) && word[idx + 1] === board[l][m];
    });
    for (const [ni, nj] of neighbors) {
      if (dfs(ni, nj, idx + 1, new Set([...visited]))) {
        return true;
      }
    }

    return false;
  };

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (dfs(x, y, 0, new Set())) {
        return true;
      }
    }
  }

  return false;
}
