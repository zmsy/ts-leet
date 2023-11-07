import { minCostClimbingStairs } from "./min-cost-climbing-stairs";

describe("minCostClimbingStairs", () => {
  test("test-1", () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
  });

  test("test-2", () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });
});
