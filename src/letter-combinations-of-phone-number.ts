/**
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number
 * could represent. Return the answer in any order.
 *
 * A mapping of digit to letters (just like on the telephone
 * buttons) is given below. Note that 1 does not map
 * to any letters.
 */

export function letterCombinations(digits: string): string[] {
  const phoneLetters = new Map<string, Array<string>>([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  if (digits === "") {
    return [];
  }

  const outputs: Array<string> = [];
  const backtrack = (combo: string, index: number) => {
    // if there's no additional digit, this is a leaf node.
    const digit = digits.at(index);
    if (digit === undefined) {
      outputs.push(combo);
    } else {
      const letters = phoneLetters.get(digit)!;
      for (const letter of letters) {
        backtrack(`${combo}${letter}`, index + 1);
      }
    }
  };

  backtrack("", 0);

  return outputs;
}
