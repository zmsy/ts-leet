import { TreeNode, treeFromArray } from "./_util";
import { distanceK } from "./all-nodes-distance-k-in-binary-tree";

describe("nodesAtDistanceK", () => {
  test("test-1", () => {
    const root1 = treeFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    expect(distanceK(root1, new TreeNode(5), 2)).toEqual(
      expect.arrayContaining([7, 4, 1])
    );
  });

  test("test-2", () => {
    const root2 = treeFromArray([1]);
    expect(distanceK(root2, new TreeNode(1), 3)).toEqual([]);
  });
});
