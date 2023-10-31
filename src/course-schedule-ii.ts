/**
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i]
 * = [ai, bi] indicates that you must take course bi first if you want to take
 * course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to
 * first take course 1.
 *
 * Return the ordering of courses you should take to finish all courses. If
 * there are many valid answers, return any of them. If it is impossible to
 * finish all courses, return an empty array.
 */
export function findOrder(
  numCourses: number,
  prerequisites: number[][]
): number[] {
  /** In-degree for each node. */
  const inDegrees = Array(numCourses).fill(0);

  /** Graph representation of the prerequisites. */
  const graph: Record<number, number[]> = {};

  // Load all of the prerequisites into the graph and indegree tracker.
  prerequisites.forEach(([to, from]) => {
    inDegrees[to] += 1;
    graph[from] ??= [];
    graph[from].push(to);
  });

  /** Find a node where in-degree is zero to start the topo sort with. */
  const queue: Array<number> = [];
  inDegrees.forEach((val, idx) => {
    if (val === 0) {
      queue.push(idx);
    }
  });

  const output: Array<number> = [];
  while (queue.length > 0) {
    const node = queue.shift()!;
    output.push(node);

    for (const next of graph[node] ?? []) {
      inDegrees[next] -= 1;
      if (inDegrees[next] === 0) {
        queue.push(next);
      }
    }
  }

  return output.length === numCourses ? output : [];
}
