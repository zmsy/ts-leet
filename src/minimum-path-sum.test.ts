import { minPathSum } from "./minimum-path-sum";

describe("minPathSum", () => {
  test("test-1", () => {
    const matrix = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ];
    expect(minPathSum(matrix)).toBe(7);
  });

  test("test-2", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(minPathSum(matrix)).toBe(12);
  });
});
