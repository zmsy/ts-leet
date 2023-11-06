import { treeFromArray } from "./_util";
import { minDepth } from "./minimum-depth-of-binary-tree";

describe("minDepth", () => {
  test("test-1", () => {
    expect(minDepth(treeFromArray([3, 9, 20, null, null, 15, 7]))).toBe(2);
  });

  test("test-2", () => {
    expect(
      minDepth(treeFromArray([2, null, 3, null, 4, null, 5, null, 6]))
    ).toBe(5);
  });
});
