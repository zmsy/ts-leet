import { TreeNode } from "./_util";

/**
 * Given the root of a binary tree, the value of a target node target, and an
 * integer k, return an array of the values of all nodes that have a distance k
 * from the target node.
 *
 * You can return the answer in any order.
 */
export function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (root === null || target === null) {
    return [];
  }

  // graph of all nodes and edges
  const graph: Record<number, Array<number>> = {};

  // dfs to get all graph nodes, this sets up edges in a two-way manner.
  const queue: Array<TreeNode | null> = [root];
  const visited = new Set<number>();
  while (queue.length > 0) {
    const current = queue.shift()!;
    visited.add(current.val);
    graph[current.val] ??= [];
    for (const child of [current?.left, current?.right]) {
      if (child != null) {
        // add bi-directional link in the graph.
        graph[current.val].push(child.val);
        graph[child.val] ??= [];
        graph[child.val].push(current.val);

        if (!visited.has(child.val)) {
          queue.push(child);
        }
      }
    }
  }

  const neighbors: Array<number> = [];
  const dfs2 = (
    node: number | undefined,
    distance: number,
    visited: Set<number>
  ): void => {
    if (node === undefined) {
      return;
    }

    const newVisited = new Set([...visited, node]);
    if (distance === 0) {
      neighbors.push(node);
    }

    for (const next of graph[node] ?? []) {
      if (!visited.has(next) && distance > 0) {
        dfs2(next, distance - 1, newVisited);
      }
    }
  };

  dfs2(target.val, k, new Set());

  return neighbors;
}
