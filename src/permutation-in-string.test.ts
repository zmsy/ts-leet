import { checkInclusion } from "./permutation-in-string";

describe("checkInclusion", () => {
  test("test-1", () => {
    expect(checkInclusion("ab", "eidbaooo")).toBe(true);
  });

  test("test-2", () => {
    expect(checkInclusion("ab", "eidboaoo")).toBe(false);
  });

  test("test-3", () => {
    expect(checkInclusion("hello", "ooolleoooleh")).toBe(false);
  });
});
