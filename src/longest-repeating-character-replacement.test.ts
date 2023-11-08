import { characterReplacement } from "./longest-repeating-character-replacement";

describe("characterReplacement", () => {
  test("test-1", () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
  });

  test("test-2", () => {
    expect(characterReplacement("AABABBA", 1)).toBe(4);
  });
});
