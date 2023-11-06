import { longestConsecutive } from "./longest-consecutive-sequence";

describe("longestConsecutive", () => {
  test("test-1", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test("test-2", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });
});
