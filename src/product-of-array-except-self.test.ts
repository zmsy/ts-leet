import { productExceptSelf } from "./product-of-array-except-self";

describe("Product Except Self", () => {
  it("Example 1", () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-1", () => {
    const nums = [2, 3, 4, 5];
    const expected = [60, 40, 30, 24];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-2", () => {
    const nums = [1, 2, 3, 0, 5];
    const expected = [0, 0, 0, 30, 0];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-3", () => {
    const nums = [1, -2, 3, -4, 5];
    const expected = [120, -60, 40, -30, 24];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-4", () => {
    const nums = [10, 10, 10, 10];
    const expected = [1000, 1000, 1000, 1000];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-5", () => {
    const nums = [-5, -4, -3, -2, -1];
    const expected = [24, 30, 40, 60, 120];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-6", () => {
    const nums = [1, 1, 1, 1, 1];
    const expected = [1, 1, 1, 1, 1];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-7", () => {
    const nums = [5];
    const expected = [1];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-8", () => {
    const nums: number[] = [];
    const expected: number[] = [];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-9", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [
      3628800, 1814400, 1209600, 907200, 725760, 604800, 518400, 453600, 403200,
      362880,
    ];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  it("test-10", () => {
    const nums = [-2, -4, 0, -1];
    const expected = [0, 0, -8, 0];
    expect(productExceptSelf(nums)).toEqual(expected);
  });
});
