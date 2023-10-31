export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
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

  let output = 0;
  while (queue.length > 0) {
    const node = queue.shift()!;
    output++;

    for (const next of graph[node] ?? []) {
      inDegrees[next] -= 1;
      if (inDegrees[next] === 0) {
        queue.push(next);
      }
    }
  }

  return output >= numCourses;
}
