import { treeFromArray } from "./_util";
import { rightSideView } from "./binary-tree-right-side-view";

describe("rightSideView", () => {
  test("test-1", () => {
    const tree = treeFromArray([1, 2, 3, null, 5, null, 4]);
    expect(rightSideView(tree)).toEqual([1, 3, 4]);
  });

  test("test-2", () => {
    const tree = treeFromArray([1, null, 3]);
    expect(rightSideView(tree)).toEqual([1, 3]);
  });

  test("test-3", () => {
    const tree = treeFromArray([1, 2, 3, null, 5, 6]);
    expect(rightSideView(tree)).toEqual([1, 3, 6]);
  });
});
