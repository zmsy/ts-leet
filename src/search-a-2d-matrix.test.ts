import { searchMatrix } from "./search-a-2d-matrix";

describe("Search a 2D Matrix", () => {
  it("Example 1", () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 3;
    expect(searchMatrix(matrix, target)).toEqual(true);
  });

  it("Example 2", () => {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ];
    const target = 13;
    expect(searchMatrix(matrix, target)).toEqual(false);
  });

  it("Example 3", () => {
    expect(searchMatrix([[1]], 1)).toBe(true);
  });
});
