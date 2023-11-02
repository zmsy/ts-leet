import { findPeakElement } from "./find-peak-element";

describe("findPeakElement", () => {
  test("test-1", () => {
    const input = [1, 2, 3, 1];
    expect(findPeakElement(input)).toBe(2);
  });

  test("test-2", () => {
    const input = [1, 2, 1, 3, 5, 6, 4];
    expect(findPeakElement(input)).toBe(5);
  });
});
