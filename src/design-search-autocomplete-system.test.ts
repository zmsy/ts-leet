import { AutocompleteSystem } from "./design-search-autocomplete-system";

describe("AutoCompleteSystem", () => {
  test("test-1", () => {
    const obj = new AutocompleteSystem(
      ["i love you", "island", "iroman", "i love leetcode"],
      [5, 3, 2, 2]
    );
    expect(obj.input("i")).toEqual(["i love you", "island", "i love leetcode"]);
    expect(obj.input(" ")).toEqual(["i love you", "i love leetcode"]);
    expect(obj.input("a")).toEqual([]);
    expect(obj.input("#")).toEqual([]);
    expect(obj.input("i")).toEqual(["i love you", "island", "i love leetcode"]);
    expect(obj.input(" ")).toEqual(["i love you", "i love leetcode", "i a"]);
    expect(obj.input("a")).toEqual(["i a"]);
    expect(obj.input("#")).toEqual([]);
    expect(obj.input("i")).toEqual(["i love you", "island", "i a"]);
    expect(obj.input(" ")).toEqual(["i love you", "i a", "i love leetcode"]);
    expect(obj.input("a")).toEqual(["i a"]);
    expect(obj.input("#")).toEqual([]);
  });

  test("test-2", () => {
    const obj = new AutocompleteSystem(["abc", "abbc", "a"], [3, 3, 3]);
    expect(obj.input("b")).toEqual([]);
    expect(obj.input("c")).toEqual([]);
    expect(obj.input("#")).toEqual([]);
    expect(obj.input("b")).toEqual(["bc"]);
    expect(obj.input("c")).toEqual(["bc"]);
    expect(obj.input("#")).toEqual([]);
    expect(obj.input("a")).toEqual(["a", "abbc", "abc"]);
    expect(obj.input("b")).toEqual(["abbc", "abc"]);
    expect(obj.input("c")).toEqual(["abc"]);
    expect(obj.input("#")).toEqual([]);
    expect(obj.input("a")).toEqual(["abc", "a", "abbc"]);
    expect(obj.input("b")).toEqual(["abc", "abbc"]);
    expect(obj.input("c")).toEqual(["abc"]);
    expect(obj.input("#")).toEqual([]);
  });
});
