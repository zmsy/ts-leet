/**
 * Similar to word search, but this time we pass a list of words down to the
 * next level at each point.
 *
 * NOTES: I realized pretty early on that this would require a Trie but I really
 * didn't want to implement it. If I do this again, I'll need to do that because
 * a long word list causes this to be non-performant.
 */
export function findWords(board: string[][], words: string[]): string[] {
  if (board.length === 0 || board[0].length === 0 || words.length === 0) {
    return [];
  }

  const m = board.length;
  const n = board[0].length;
  const coords = (i: number, j: number) => `${i}.${j}`;

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
    visited: Set<string>,
    candidateWords: Array<string>
  ): Array<string> => {
    visited.add(coords(i, j));
    // if this doesn't match the next letter, return early.
    const newWords = candidateWords.filter((w) => w[idx] === board[i][j]);
    if (newWords.length === 0) {
      return [];
    }

    // success case, if it's the final letter, return early.
    const foundWords = newWords.filter((w) => idx === w.length - 1);

    const neighbors = getNeighbors(i, j).filter(([l, m]) => {
      return !visited.has(coords(l, m));
    });
    for (const [ni, nj] of neighbors) {
      const words = dfs(ni, nj, idx + 1, new Set([...visited]), newWords);
      words.forEach((w) => foundWords.push(w));
    }

    return foundWords;
  };

  const allWords = new Set<string>();
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      const found = dfs(x, y, 0, new Set(), words);
      found.forEach((x) => allWords.add(x));
    }
  }

  return Array.from(allWords);
}
