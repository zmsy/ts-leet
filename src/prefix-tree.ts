/**
 * Implement a prefix tree aka Trie.
 */
interface TrieNode {
  val: string,
  isWord: boolean;
  children: Map<string, TrieNode>;
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = {
      val: "",
      isWord: false,
      children: new Map(),
    }
  }

  insert(word: string): void {
    if (!word.length) {
      return;
    }
    let current: TrieNode = this.root;
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

    // lastly, mark this last node as "isWord" since
    // a word ends here. this is because some words
    // can be prefixes of other words.
    current.isWord = true;
  }

  search(word: string): boolean {
    let current: TrieNode = this.root;
    for (const w of word) {
      if (!current.children.has(w)) {
        return false;
      }
      current = current.children.get(w)!;
    }
    // if we've reached the end of the in the tree,
    // return whether or not this is a word node.
    return current.isWord;
  }

  startsWith(prefix: string): boolean {
    let current: TrieNode = this.root;
    for (const w of prefix) {
      if (!current.children.has(w)) {
        return false;
      }
      current = current.children.get(w)!;
    }
    return true;
  }
}
