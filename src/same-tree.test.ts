import { treeFromArray } from "./_util";
import { isSameTree } from "./same-tree";

describe("isSameTree", () => {
  test("test-1", () => {
    expect(isSameTree(treeFromArray([1, 2, 3]), treeFromArray([1, 2, 3]))).toBe(
      true
    );
  });

  test("test-2", () => {
    expect(isSameTree(treeFromArray([1, 2]), treeFromArray([1, null, 2]))).toBe(
      false
    );
  });
});
