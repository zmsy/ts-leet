import { treeFromArray } from "./_util";
import { hasPathSum } from "./path-sum";

describe("hasPathSum", () => {
  test("test-1", () => {
    expect(
      hasPathSum(
        treeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
        22
      )
    ).toBe(true);
  });

  test("test-2", () => {
    expect(hasPathSum(treeFromArray([1, 2, 3]), 5)).toBe(false);
  });

  test("test-3", () => {
    expect(hasPathSum(treeFromArray([1, 2]), 1)).toBe(false);
  });
});
