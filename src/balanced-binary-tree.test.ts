import { treeFromArray } from "./_util";
import { isBalanced } from "./balanced-binary-tree";

describe("isBalanced", () => {
  test("test-1", () => {
    expect(isBalanced(treeFromArray([3, 9, 20, null, null, 15, 7]))).toBe(true);
  });

  test("test-2", () => {
    expect(isBalanced(treeFromArray([1, 2, 2, 3, 3, null, null, 4, 4]))).toBe(
      false
    );
  });
});
