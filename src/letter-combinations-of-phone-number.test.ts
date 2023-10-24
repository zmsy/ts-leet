import { letterCombinations } from "./letter-combinations-of-phone-number";

describe("Letter Combinations of a Phone Number", () => {
  it("Example 1", () => {
    const digits = "23";
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    expect(letterCombinations(digits)).toEqual(expected);
  });

  it("Example 2", () => {
    const digits = "";
    const expected: string[] = [];
    expect(letterCombinations(digits)).toEqual(expected);
  });

  it("Example 3", () => {
    const digits = "2";
    const expected = ["a", "b", "c"];
    expect(letterCombinations(digits)).toEqual(expected);
  });
});
