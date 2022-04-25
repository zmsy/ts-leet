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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let best = 0;
  /* Traverse the binary tree and return the deepest node. */
  const recurse = (child: TreeNode | null, depth: number): void => {
    if (!child) {
      return;
    }
    best = Math.max(depth, best);
    recurse(child.left, depth + 1);
    recurse(child.right, depth + 1);
  };

  recurse(root, 1);
  return best;
}
