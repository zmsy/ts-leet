import { TreeNode } from "./_util";

/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * A height-balanced binary tree is a binary tree in which the depth of the two
 * subtrees of every node never differs by more than one.
 */
export function isBalanced(root: TreeNode | null): boolean {
  let isBalanced = true;
  const recurse = (node: TreeNode | null, depth: number): number => {
    // base case - node is null
    if (node === null) {
      return depth;
    }

    const leftDepth = recurse(node.left, depth + 1);
    const rightDepth = recurse(node.right, depth + 1);

    if (Math.abs(leftDepth - rightDepth) > 1) {
      isBalanced = false;
    }

    return Math.max(leftDepth, rightDepth);
  };
  recurse(root, 0);
  return isBalanced;
}
