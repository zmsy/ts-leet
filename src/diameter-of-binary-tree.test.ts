import { treeFromArray } from "./_util";
import { diameterOfBinaryTree } from "./diameter-of-binary-tree";

describe("diameterOfBinaryTree", () => {
  test("test-1", () => {
    expect(diameterOfBinaryTree(treeFromArray([1, 2, 3, 4, 5]))).toBe(3);
  });
});
