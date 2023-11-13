import { searchRange } from "./find-first-and-last-position-of-element-in-sorted-array";

describe("searchRange", () => {
  test("test-1", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
  });

  test("test-2", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
  });
});
