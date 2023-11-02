import { treeFromArray } from "./_util";
import { maxPathSum } from "./binary-tree-maximum-path-sum";

describe("maxPathSum", () => {
  test("test-1", () => {
    expect(maxPathSum(treeFromArray([1, 2, 3]))).toBe(6);
  });

  test("test-2", () => {
    expect(maxPathSum(treeFromArray([-10, 9, 20, null, null, 15, 7]))).toBe(42);
  });
});
