import { setZeroes } from "./set-matrix-zeroes";

describe("setZeroes", () => {
  test("test-1", () => {
    let matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    let outputMatrix = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual(outputMatrix);
  });

  test("test-2", () => {
    let matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    let outputMatrix = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ];
    setZeroes(matrix);
    expect(matrix).toEqual(outputMatrix);
  });
});
