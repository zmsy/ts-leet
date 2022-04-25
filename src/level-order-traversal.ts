import { TreeNode } from "./_util";

/**
 * Traverse through a tree and return the values in
 * level order by depth.
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  // store level-order values
  const values: number[][] = [];

  // create a queue for bfs
  const queue: Array<[TreeNode, number]> = [[root, 0]];
  while (queue) {
    const next = queue.shift();
    if (!next) break;
    const node = next[0];
    const depth = next[1];
    // move this into the level order
    values[depth] ??= [];
    values[depth].push(node.val);

    if (node.left) {
      queue.push([node.left, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }

  return values;
}
