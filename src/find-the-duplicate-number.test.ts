import { findDuplicate } from "./find-the-duplicate-number";

describe("findDuplicate", () => {
  test("test-1", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
  });

  test("test-2", () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
  });
});
