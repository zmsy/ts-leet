import { TreeNode } from "./_util";

/**
 * Given the root of a binary tree, return the zigzag level order traversal of
 * its nodes' values. (i.e., from left to right, then right to left for the next
 * level and alternate between).
 */
export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const levels: Array<Array<number>> = [];
  const traverse = (node: TreeNode | null, level: number): void => {
    if (!node) {
      return;
    }

    levels[level] ??= [];
    levels[level].push(node.val);

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 1);
  levels.shift(); // get rid of the 0th element

  for (let i = 1; i < levels.length; i += 2) {
    levels[i].reverse();
  }

  return levels;
}
