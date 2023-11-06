import { TreeNode } from "./_util";

/**
 *
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0;

  /**
   * Function to keep track of spread between nodes. Left nodes get negative,
   * right nodes get positive.
   * Return a [min, max] tuple.
   */
  let best = 0;
  const spelunk = (node: TreeNode | null): number => {
    if (node === null) {
      return 0;
    }

    const right = spelunk(node.right);
    const left = spelunk(node.left);
    best = Math.max(best, left + right);
    return Math.max(left, right) + 1;
  };

  spelunk(root);
  return best;
}
