import { TreeNode } from "./_util";

/**
 * Given the root of a binary tree, return the vertical order traversal of its
 * nodes' values. (i.e., from top to bottom, column by column).
 *
 * If two nodes are in the same row and column, the order should be from left
 * to right.
 */
export function verticalOrder(root: TreeNode | null): number[][] {
  const levels: Record<string, number[]> = {};

  const queue: Array<[TreeNode | null, number]> = [[root, 0]];
  while (queue.length > 0) {
    const [node, rightness] = queue.shift()!;
    if (node !== null) {
      levels[String(rightness)] ??= [];
      levels[String(rightness)].push(node.val);
      queue.push([node.left, rightness - 1]);
      queue.push([node.right, rightness + 1]);
    }
  }

  const sorted = Object.entries(levels)
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .map((x) => x[1]);
  return sorted;
}
