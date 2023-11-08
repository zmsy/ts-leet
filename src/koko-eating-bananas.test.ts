import { minEatingSpeed } from "./koko-eating-bananas";

describe("minEatingSpeed", () => {
  test("test-1", () => {
    expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
  });
});
