import { TreeNode } from "./_util";

/**
 * Given the root of a binary tree and an integer targetSum, return true if the
 * tree has a root-to-leaf path such that adding up all the values along the
 * path equals targetSum.
 *
 * A leaf is a node with no children.
 */
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  let foundSum = false;
  const recurse = (node: TreeNode | null, total: number): void => {
    // only check at the point where the node is null, because that means we've
    // hit the end of the path.
    if (node === null) {
      return;
    }

    const newTotal = (total += node.val);
    if (newTotal === targetSum && node.left === null && node.right === null) {
      foundSum = true;
      return;
    } else {
      recurse(node.left, newTotal);
      recurse(node.right, newTotal);
    }
  };

  recurse(root, 0);
  return foundSum;
}
