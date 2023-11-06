import { sortArray } from "./sort-array";

describe("sortArray", () => {
  test("test-1", () => {
    expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
  });

  test("test-2", () => {
    expect(sortArray([10, 8, 6, 2])).toEqual([2, 6, 8, 10]);
  });

  test("test-3", () => {
    expect(sortArray([1, 3, 5, 7])).toEqual([1, 3, 5, 7]);
  });

  test("test-4", () => {
    expect(sortArray([9, 5, 2, 4, 1])).toEqual([1, 2, 4, 5, 9]);
  });

  test("test-5", () => {
    expect(sortArray([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });

  test("test-6", () => {
    expect(sortArray([3, 5, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("test-7", () => {
    expect(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  test("test-8", () => {
    expect(sortArray([1])).toEqual([1]);
  });

  test("test-9", () => {
    expect(sortArray([2, 2, 1, 1, 3, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test("test-10", () => {
    expect(sortArray([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("test-11", () => {
    expect(sortArray([2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("test-12", () => {
    expect(sortArray([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("test-13", () => {
    expect(sortArray([1, 4, 3, 2, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("test-14", () => {
    expect(sortArray([5, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  test("test-15", () => {
    expect(sortArray([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("test-16", () => {
    expect(sortArray([9, 6, 3, 1, 5])).toEqual([1, 3, 5, 6, 9]);
  });

  test("test-17", () => {
    expect(sortArray([2, 1, 4, 3])).toEqual([1, 2, 3, 4]);
  });

  test("test-18", () => {
    expect(sortArray([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });

  test("test-19", () => {
    expect(sortArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("test-20", () => {
    expect(sortArray([1, 2, 3, 1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test("test-21", () => {
    expect(sortArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test("test-22", () => {
    expect(sortArray([2, 1])).toEqual([1, 2]);
  });

  test("test-23", () => {
    expect(sortArray([2, 4, 3, 1])).toEqual([1, 2, 3, 4]);
  });

  test("test-24", () => {
    expect(sortArray([1, 3, 2])).toEqual([1, 2, 3]);
  });

  test("test-25", () => {
    expect(sortArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
