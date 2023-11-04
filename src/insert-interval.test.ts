import { insert } from "./insert-interval";

describe("insert", () => {
  test("test-1", () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ];
    const newInterval = [2, 5];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [1, 5],
      [6, 9],
    ]);
  });

  test("test-2", () => {
    const intervals = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ];
    const newInterval = [4, 8];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });

  test("test-3", () => {
    const intervals = [[1, 5]];
    const newInterval = [6, 8];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [1, 5],
      [6, 8],
    ]);
  });

  test("test-4", () => {
    const intervals = [
      [2, 6],
      [7, 9],
    ];
    const newInterval = [15, 18];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [2, 6],
      [7, 9],
      [15, 18],
    ]);
  });
});
