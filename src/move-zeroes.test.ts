import { moveZeroes } from "./move-zeroes";

describe("Move Zeroes", () => {
  test("test-1", () => {
    const nums = [0, 1, 0, 3, 12];
    const expected = [1, 3, 12, 0, 0];
    moveZeroes(nums);
    expect(nums).toEqual(expected);
  });

  test("test-2", () => {
    const nums = [0];
    const expected = [0];
    moveZeroes(nums);
    expect(nums).toEqual(expected);
  });
});
