import { TreeNode } from "./_util";
/**
 * Given the roots of two binary trees p and q, write a function to check if
 * they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical,
 * and the nodes have the same value.
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p !== null && q !== null) {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }

  return p === null && q === null;
}
