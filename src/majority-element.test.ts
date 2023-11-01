import { majorityElement } from "./majority-element";

describe("majorityElement", () => {
  test("test-1", () => {
    const nums1 = [3, 2, 3];
    expect(majorityElement(nums1)).toEqual(3);
  });

  test("test-2", () => {
    const nums2 = [2, 2, 1, 1, 1, 2, 2];
    expect(majorityElement(nums2)).toEqual(2);
  });

  test("test-3", () => {
    const nums3 = [6, 5, 5];
    expect(majorityElement(nums3)).toEqual(5);
  });

  test("test-4", () => {
    const nums4 = [
      32, 41, 21, 29, 7, 53, 97, 76, 71, 53, 53, 53, 72, 53, 53, 14, 22, 53, 67,
      53, 53, 53, 54, 98, 53, 46, 53, 53, 62, 53, 76, 20, 60, 53, 31, 53, 53,
      53, 95, 27, 53, 53, 53, 53, 36, 59, 40, 53, 53, 64, 53, 53, 53, 21, 53,
      51, 53, 53, 2, 53, 53, 53, 53, 53, 50, 53, 53, 53, 23, 88, 3, 53, 61, 19,
      53, 68, 53, 35, 42, 53, 53, 48, 34, 54, 53, 75, 53, 53, 50, 44, 92, 41,
      71, 53, 53, 82, 53, 53, 14, 53,
    ];
    expect(majorityElement(nums4)).toBe(53);
  });
});
