import { treeFromArray } from "./_util";
import { kthSmallest } from "./kth-smallest-element-in-a-bst";

describe("kthSmallest", () => {
  test("test-1", () => {
    let root = treeFromArray([3, 1, 4, null, 2]);
    let k = 1;
    expect(kthSmallest(root, k)).toEqual(1);
  });

  test("test-2", () => {
    let root = treeFromArray([5, 3, 6, 2, 4, null, null, 1]);
    let k = 3;
    expect(kthSmallest(root, k)).toEqual(3);
  });
});
