import { Node } from "./_util";

/**
 * Given a reference of a node in a connected undirected graph.
 *
 * Return a deep copy (clone) of the graph.
 *
 * Each node in the graph contains a value (int) and a list (List[Node]) of its
 * neighbors.
 */
export function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  const oldToNew = new Map<Node, Node>();
  const queue: Array<Node> = [node];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (!oldToNew.has(current)) {
      oldToNew.set(current, new Node(current.val, []));
    }
    const newNode = oldToNew.get(current)!;

    for (const neighbor of current.neighbors) {
      if (!oldToNew.has(neighbor)) {
        oldToNew.set(neighbor, new Node(neighbor.val, []));
        queue.push(neighbor);
      }

      const newNeighbor = oldToNew.get(neighbor)!;
      newNode.neighbors.push(newNeighbor);
    }
  }

  // return the node's newer version as the output.
  const output = oldToNew.get(node);
  if (!output) {
    throw new Error("Make the compiler happy!");
  }
  return output;
}
