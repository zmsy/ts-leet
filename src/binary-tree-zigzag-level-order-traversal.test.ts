import { treeFromArray } from "./_util";
import { zigzagLevelOrder } from "./binary-tree-zigzag-level-order-traversal";

describe("zigzagLevelOrder", () => {
  test("Example 1", () => {
    let root = treeFromArray([3, 9, 20, null, null, 15, 7]);
    expect(zigzagLevelOrder(root)).toEqual([[3], [20, 9], [15, 7]]);
  });

  test("Example 2", () => {
    let root = treeFromArray([1]);
    expect(zigzagLevelOrder(root)).toEqual([[1]]);
  });

  test("Example 3", () => {
    let root = treeFromArray([]);
    expect(zigzagLevelOrder(root)).toEqual([]);
  });
});
