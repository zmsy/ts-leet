import { graphFromAdjacencyList } from "./_util";
import { cloneGraph } from "./clone-graph";

describe("cloneGraph", () => {
  test("test-1", () => {
    const graph = graphFromAdjacencyList([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]);
    const result = cloneGraph(graph[0]);
  });
});
