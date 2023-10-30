import { findWords } from "./word-search-ii";

describe("Word Search", () => {
  test("Example 1", () => {
    const board = [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ];
    const words = ["oath", "pea", "eat", "rain"];
    const expected = ["eat", "oath"];
    const result = findWords(board, words);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test("Example 2", () => {
    const board = [
      ["a", "b"],
      ["c", "d"],
    ];
    const words = ["abcb"];
    const expected: string[] = [];
    const result = findWords(board, words);
    expect(result).toEqual(expected);
  });
});
