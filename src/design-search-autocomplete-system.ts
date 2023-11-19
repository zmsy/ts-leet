/**
 * Actual implementation of the autocomplete.
 *
 * Problem description's too long :D
 * https://leetcode.com/problems/design-search-autocomplete-system/
 */
export class AutocompleteSystem {
  static sentenceCompleteChar = "#";
  private currentInput: string;
  private root: TrieNode;

  // need to handle adding in the default sentence values provided
  constructor(sentences: string[], times: number[]) {
    this.currentInput = "";
    this.root = new TrieNode("");
    for (const [idx, sentence] of sentences.entries()) {
      this.addSentence(sentence, times[idx]);
    }
  }

  input(c: string): string[] {
    if (c === AutocompleteSystem.sentenceCompleteChar) {
      // clear the current input if they hit enter
      this.addSentence(this.currentInput);
      this.currentInput = "";
      return [];
    }

    this.currentInput += c;
    const results = this.search(this.currentInput);
    return results;
  }

  /**
   * Add inputs to the trie. This is a way to make it so that the autocomplete
   * system is prepopulated.
   *
   * The `isSentenceInput` and `defaultHeat` parameters exist to pass default
   * information down to the starter nodes.
   */
  addSentence(c: string, heat: number = 1): void {
    let parentNode = this.root;
    for (let idx = 0; idx < c.length; idx++) {
      const char = c[idx];
      if (parentNode.children[char] === undefined) {
        // in addition to knowing whether this was a final input, this is just
        // checking that we're literally at the last character.
        parentNode.children[char] = new TrieNode(char);
      }
      parentNode = parentNode.children[char];
    }
    parentNode.sentence = c;
    parentNode.heat += heat;
  }

  /** Search for the current input in the system. */
  search(c: string): string[] {
    let node: TrieNode | undefined = this.root;
    for (let i = 0; i < c.length; i++) {
      node = node.children[c[i]];
      if (node === undefined) {
        return []; // early out, this means there's no records here.
      }
    }

    const sentenceNodes: Array<TrieNode> = [];
    const queue: Array<TrieNode> = [node];
    while (queue.length > 0) {
      const current = queue.pop()!;
      if (current.isSentence()) {
        sentenceNodes.push(current);
      }

      for (const child of Object.values(current.children)) {
        queue.push(child);
      }
    }

    // return the actual sentences.
    const top3 = sentenceNodes
      .sort(sortNodes)
      .filter((_n, idx) => idx <= 2)
      .map((node) => node.sentence!);
    return top3;
  }
}

/**
 * One node in the Trie, which is how the data for the autocomplete is stored.
 */
class TrieNode {
  children: Record<string, TrieNode>;
  heat: number;
  sentence: string | undefined;

  constructor(
    public readonly char: string,
    heat: number = 0,
    sentence?: string
  ) {
    this.children = {};
    this.heat = heat;
    this.sentence = sentence;
  }

  addChild(node: TrieNode): void {
    this.children[node.char] = node;
  }

  isSentence(): boolean {
    return this.sentence !== undefined;
  }

  heatUp(): void {
    this.heat += 1;
  }
}

function sortNodes(a: TrieNode, b: TrieNode): number {
  if (a.heat > b.heat) {
    return -1;
  } else if (b.heat > a.heat) {
    return 1;
  }

  return a.sentence!.localeCompare(b.sentence!);
}
