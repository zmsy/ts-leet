import { treeFromArray } from "./_util";
import { verticalOrder } from "./binary-tree-vertical-order-traversal";

describe("verticalOrder", () => {
  test("test-1", () => {
    const input = treeFromArray([3, 9, 20, null, null, 15, 7]);
    expect(verticalOrder(input)).toEqual([[9], [3, 15], [20], [7]]);
  });

  test("test-2", () => {
    const input = treeFromArray([3, 9, 8, 4, 0, 1, 7]);
    expect(verticalOrder(input)).toEqual([[4], [9], [3, 0, 1], [8], [7]]);
  });

  test("test-3", () => {
    const input = treeFromArray([3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5]);
    expect(verticalOrder(input)).toEqual([[4], [9, 5], [3, 0, 1], [8, 2], [7]]);
  });
});
