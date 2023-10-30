import { TreeNode, treeFromArray } from "./_util";
import { lowestCommonAncestor } from "./lowest-common-ancestor-of-a-binary-tree";

describe("lowestCommonAncestorBinaryTree", () => {
  it("test-1", () => {
    const input = treeFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const result = lowestCommonAncestor(
      input,
      new TreeNode(5),
      new TreeNode(1)
    );
    expect(result?.val).toBe(3);
  });

  it("test-2", () => {
    const input = treeFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const result = lowestCommonAncestor(
      input,
      new TreeNode(5),
      new TreeNode(4)
    );
    expect(result?.val).toBe(5);
  });
});
