import { longestSubarray } from "./longest-subarray-of-1s-after-deleting-one-element";

describe("longestSubarray", () => {
  test("test-1", () => {
    expect(longestSubarray([])).toBe(0);
  });

  test("test-2", () => {
    expect(longestSubarray([1, 1, 0, 1])).toBe(3);
  });

  test("test-3", () => {
    expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
  });

  test("test-4", () => {
    expect(longestSubarray([1, 1, 1])).toBe(2);
  });
});
