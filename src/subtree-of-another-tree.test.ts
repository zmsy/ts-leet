import { treeFromArray } from "./_util";
import { isSubtree } from "./subtree-of-another-tree";

describe("isSubtree", () => {
  test("test-1", () => {
    const mainTree = treeFromArray([3, 4, 5, 1, 2]);
    const checkTree = treeFromArray([4, 1, 2]);
    expect(isSubtree(mainTree, checkTree)).toBe(true);
  });

  test("test-2", () => {
    const mainTree = treeFromArray([3, 4, 5, 1, 2, null, null, null, null, 0]);
    const checkTree = treeFromArray([4, 1, 2]);
    expect(isSubtree(mainTree, checkTree)).toBe(false);
  });
});
