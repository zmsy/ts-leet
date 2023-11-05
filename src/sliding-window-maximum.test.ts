import { maxSlidingWindow } from "./sliding-window-maximum";

describe("maxSlidingWindow", () => {
  test("test-1", () => {
    const nums = [1, 3, -1, -3, 5, 3, 6, 7];
    const k = 3;
    const output = [3, 3, 5, 5, 6, 7];
    const result = maxSlidingWindow(nums, k);
    expect(result).toEqual(output);
  });

  test("test-2", () => {
    const nums = [1];
    const k = 1;
    const output = [1];
    expect(maxSlidingWindow(nums, k)).toEqual(output);
  });
});
