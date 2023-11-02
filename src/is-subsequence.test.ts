import { isSubsequence } from "./is-subsequence";

describe("isSubsequence", () => {
  test("test-1", () => {
    expect(isSubsequence("", "")).toBe(true);
  });

  test("test-2", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

  test("test-3", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
  });

  test("test-4", () => {
    expect(isSubsequence("aaaaaa", "bbaaaa")).toBe(false);
  });
});
