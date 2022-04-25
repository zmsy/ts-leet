import { TreeNode } from "./_util";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  let valid = true;

  const recurse = (node: TreeNode | null, left: number, right: number): void => {
    if (!node) {
      return;
    }

    if (node.val <= left || node.val >= right) {
      valid = false;
      return;
    }

    recurse(node.left, left, Math.min(node.val, right));
    recurse(node.right, Math.max(node.val, left), right);
  }

  recurse(root, -Infinity, Infinity);
  return valid;
}
