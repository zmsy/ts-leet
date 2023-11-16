import { TreeNode } from "./_util";

/**
 * Given the root node of a binary search tree and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range
 * [low, high].
 */
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root === null) {
    return 0;
  }

  const left = rangeSumBST(root.left, low, high);
  const right = rangeSumBST(root.right, low, high);
  const rootVal = root.val >= low && root.val <= high ? root.val : 0;
  return left + right + rootVal;
}
