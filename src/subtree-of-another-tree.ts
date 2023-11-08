import { TreeNode, treeDiagramString } from "./_util";

/**
 * Given the roots of two binary trees root and subRoot, return true if there is
 * a subtree of root with the same structure and node values of subRoot and
 * false otherwise.
 */
export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean {
  if (root === null || subRoot === null) {
    return false;
  } else if (hasSubTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function hasSubTree(node: TreeNode | null, subNode: TreeNode | null): boolean {
  if (node === null && subNode === null) {
    // base case 1: they're both null, this matches.
    return true;
  } else if (node === null || subNode === null) {
    // base case 2: only one is null, no match.
    return false;
  } else if (node.val !== subNode.val) {
    return false;
  }

  return (
    hasSubTree(node.left, subNode.left) && hasSubTree(node.right, subNode.right)
  );
}
