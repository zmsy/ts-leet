import { containsDuplicate } from "./contains-duplicate";

describe("containsDuplicate", () => {
  test("test-1", () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toEqual(true);
  });

  test("test-2", () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toEqual(false);
  });

  test("test-3", () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(nums)).toEqual(true);
  });
});
