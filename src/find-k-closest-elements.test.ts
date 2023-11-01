import { findClosestElements } from "./find-k-closest-elements";

describe("findClosestElements", () => {
  test("Example 1", () => {
    const arr = [1, 2, 3, 4, 5];
    const k = 4;
    const x = 3;
    const output = [1, 2, 3, 4]; // Expected output

    expect(findClosestElements(arr, k, x)).toEqual(
      expect.arrayContaining(output)
    );
  });

  test("Example 2", () => {
    const arr = [1, 2, 3, 4, 5];
    const k = 4;
    const x = -1;
    const output = [1, 2, 3, 4]; // Expected output

    expect(findClosestElements(arr, k, x)).toEqual(output);
  });

  test("Example 3", () => {
    expect(findClosestElements([1], 1, 1)).toEqual([1]);
  });

  test("Example 4", () => {
    expect(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9)).toEqual([10]);
  });

  test("Example 5", () => {
    expect(findClosestElements([-2, -1, 1, 2, 3, 4, 5], 7, 3)).toEqual([
      -2, -1, 1, 2, 3, 4, 5,
    ]);
  });

  test("Example 6", () => {
    expect(findClosestElements([3, 5, 8, 10], 2, 15)).toEqual([8, 10]);
  });
});
