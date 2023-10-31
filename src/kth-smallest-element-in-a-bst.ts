import { TreeNode } from "./_util";

/**
 * Given the root of a binary search tree, and an integer k, return the kth
 * smallest value (1-indexed) of all the values of the nodes in the tree.
 */
export function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) {
    return 0;
  }

  let kCount = k;
  let kthSmallest: number | undefined = undefined;
  /**
   * Perform an inorder traversal of the nodes. left, this, right.
   */
  const inorder = (node: TreeNode): void => {
    if (node.left !== null && kCount > 0) {
      inorder(node.left);
    }

    // base case, both children are null. this means we've hit a leaf node.
    if (kCount > 0) {
      kCount -= 1;
      if (kCount === 0) {
        kthSmallest = node.val;
      }
    }

    if (node.right !== null && kCount > 0) {
      inorder(node.right);
    }
  };

  inorder(root);
  return kthSmallest!;
}
