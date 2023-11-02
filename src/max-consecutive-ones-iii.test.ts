import { longestOnes } from "./max-consecutive-ones-iii";

describe("longestOnes", () => {
  test("test-1", () => {
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
  });

  test("test-2", () => {
    expect(
      longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
    ).toBe(10);
  });
});
