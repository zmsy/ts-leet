import { TreeNode, treeDiagramString } from "./_util";

/**
 * Given the root of a binary tree, imagine yourself standing on the right side
 * of it, return the values of the nodes you can see ordered from top to bottom.
 */
export function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const queue: Array<QueueVal> = [[root, 1]];
  const levelMaxes: Record<number, number> = {};

  console.log(treeDiagramString(root));

  // BFS gives you a level-order traversal of the tree, so we use that to find
  // the rightmost value in the tree
  while (queue.length > 0) {
    // do one iteration per level, peek at the first node to find the level
    const level = queue[0][1];

    let j = 0;
    let current: QueueVal | undefined = undefined;
    while (queue.length > 0 && queue[0][1] === level) {
      current = queue.shift();
      if (current === undefined) {
        break;
      }

      // bfs = this, left, right
      if (current[0].left != undefined) {
        queue.push([current[0].left, level + 1]);
      }
      if (current[0].right != undefined) {
        queue.push([current[0].right, level + 1]);
      }
    }
    levelMaxes[level] = current?.[0]?.val ?? -Infinity;
  }

  const values = Object.values(levelMaxes);
  return values;
}

type QueueVal = [TreeNode, number];
