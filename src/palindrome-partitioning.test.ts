import { partition } from "./palindrome-partitioning";

describe("partition function", () => {
  test("Test Case 1", () => {
    const result = partition("aab");
    expect(result).toEqual([
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });

  test("Test Case 2", () => {
    const result = partition("a");
    expect(result).toEqual([["a"]]);
  });

  test("Test Case 3", () => {
    const result = partition("aaa");
    expect(result).toEqual(
      expect.arrayContaining([
        ["a", "a", "a"],
        ["aa", "a"],
        ["a", "aa"],
        ["aaa"],
      ])
    );
  });

  test("Test Case 4", () => {
    const result = partition("aba");
    expect(result).toEqual(expect.arrayContaining([["a", "b", "a"], ["aba"]]));
  });

  test("Test Case 5", () => {
    const result = partition("aaaa");
    expect(result).toEqual(
      expect.arrayContaining([
        ["a", "a", "a", "a"],
        ["aa", "a", "a"],
        ["a", "aa", "a"],
        ["a", "a", "aa"],
        ["aaa", "a"],
        ["a", "aaa"],
        ["aaaa"],
      ])
    );
  });

  test("Test Case 6", () => {
    const result = partition("abba");
    expect(result).toEqual(
      expect.arrayContaining([["a", "b", "b", "a"], ["a", "bb", "a"], ["abba"]])
    );
  });
});
