import { treeFromArray } from "./_util";
import { isValidBST } from "./validate-bst";

describe("isValidBst", () => {
  test("test-1", () => {
    expect(isValidBST(treeFromArray([2, 1, 3]))).toBe(true);
  });

  test("test-2", () => {
    expect(isValidBST(treeFromArray([5, 1, 4, null, null, 3, 6]))).toBe(false);
  });

  test("test-3", () => {
    expect(isValidBST(treeFromArray([2, 2, 2]))).toBe(false);
  });

  test("test-4", () => {
    expect(isValidBST(treeFromArray([1, null, 2, 3]))).toBe(false);
  });
});
