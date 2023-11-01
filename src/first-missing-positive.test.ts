import { firstMissingPositive } from "./first-missing-positive";

describe("firstMissingPositive", () => {
  test("test-1", () => {
    expect(firstMissingPositive([1, 2, 0])).toEqual(3);
  });

  test("test-2", () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toEqual(2);
  });

  test("test-3", () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toEqual(1);
  });
});
