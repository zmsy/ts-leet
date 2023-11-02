import { search } from "./binary-search";

describe("binarySearch", () => {
  test("test-1", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test("test-2", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});
