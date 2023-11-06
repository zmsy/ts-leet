import { TreeNode } from "./_util";

/**
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 */
export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let best = Infinity;
  const bfs = (node: TreeNode | null, depth: number): number => {
    if (node === null) {
      return Infinity;
    }

    // leaf node!
    if (node?.left === null && node.right === null) {
      best = Math.min(best, depth);
    }

    return Math.min(bfs(node.left, depth + 1), bfs(node.right, depth + 1));
  };

  bfs(root, 1);

  return best;
}
