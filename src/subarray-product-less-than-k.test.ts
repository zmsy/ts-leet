import { numSubarrayProductLessThanK } from "./subarray-product-less-than-k";

describe("numSubarrayProductLessThanK", () => {
  it("handles empty array", () => {
    expect(numSubarrayProductLessThanK([], 100)).toBe(0);
  });

  it("handles bad r value", () => {
    expect(numSubarrayProductLessThanK([1, 2], -1)).toBe(0);
  });

  it("handles first basic example", () => {
    expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8);
  });
});
