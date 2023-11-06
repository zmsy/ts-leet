import { TreeNode } from "./_util";

/**
 * Given the root of a binary tree, determine if it is a valid binary search
 * tree (BST).
 * 
 * A valid BST is defined as follows:
   * The left subtree of a node contains only nodes with keys less than the
     node's key.
   * The right subtree of a node contains only nodes with keys greater than the
     node's key.
   * Both the left and right subtrees must also be binary search trees.
 */

export function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  let valid = true;

  const recurse = (
    node: TreeNode | null,
    left: number,
    right: number
  ): void => {
    if (!node) {
      return;
    }

    if (node.val <= left || node.val >= right) {
      valid = false;
      return;
    }

    recurse(node.left, left, Math.min(node.val, right));
    recurse(node.right, Math.max(node.val, left), right);
  };

  recurse(root, -Infinity, Infinity);
  return valid;
}
