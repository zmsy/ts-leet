import { rob } from "./house-robber";

describe("House Robber", () => {
  it("test-1", () => {
    const nums = [1, 2, 3, 1];
    expect(rob(nums)).toEqual(4);
  });

  it("test-2", () => {
    const nums = [2, 7, 9, 3, 1];
    expect(rob(nums)).toEqual(12);
  });
});
