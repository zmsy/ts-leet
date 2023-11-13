import { treeFromArray } from "./_util";
import { isSymmetric } from "./symmetric-tree";

describe("isSymmetric", () => {
  test("test-1", () => {
    const tree = treeFromArray([1, 2, 2, 3, 4, 4, 3]);
    expect(isSymmetric(tree)).toBe(true);
  });

  test("test-2", () => {
    const tree = treeFromArray([1, 2, 2, null, 3, null, 3]);
    expect(isSymmetric(tree)).toBe(false);
  });
});
