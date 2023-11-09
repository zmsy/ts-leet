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

  // create a trie to store all of the prefixes.
  const root: TrieNode = {
    val: "",
    isWord: false,
    children: new Map(),
  };

  // this is ripped directly from my Trie implementation, so that we can easily
  // insert into the Trie container.
  const insertPrefix = (word: string): void => {
    if (!word.length) {
      return;
    }
    let current: TrieNode = root;
    for (const w of word) {
      if (!current.children.has(w)) {
        // if the next letter in the word
        // doesn't exist as a node in the tree,
        // create it first.
        const newNode: TrieNode = {
          val: w,
          isWord: false,
          children: new Map(),
        };
        current.children.set(w, newNode);
      }
      current = current.children.get(w)!;
    }
    current.isWord = true;
  };

  words.forEach((word) => insertPrefix(word));

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
    word: string,
    trieNode: TrieNode
  ): Array<string> => {
    visited.add(coords(i, j));
    // if this doesn't match the next letter, return early.
    const char = board[i][j];
    const childNode = trieNode.children.get(char);
    const newWord = word + char;

    // if this can't be made into a word, then bounce the F outta here
    if (childNode === undefined) {
      return [];
    }

    const foundWords: string[] = childNode?.isWord ? [word] : [];

    const neighbors = getNeighbors(i, j).filter(([l, m]) => {
      return !visited.has(coords(l, m));
    });
    for (const [ni, nj] of neighbors) {
      if (childNode.children.has(board[ni][nj])) {
        const words = dfs(
          ni,
          nj,
          idx + 1,
          new Set([...visited]),
          word + board[ni][nj],
          childNode
        );
        words.forEach((w) => foundWords.push(w));
      }
    }

    return foundWords;
  };

  const allWords = new Set<string>();
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      const found = dfs(x, y, 0, new Set(), board[x][y], root);
      found.forEach((x) => allWords.add(x));
    }
  }

  return Array.from(allWords);
}

interface TrieNode {
  val: string;
  isWord: boolean;
  children: Map<string, TrieNode>;
}
