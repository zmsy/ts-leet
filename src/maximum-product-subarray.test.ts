import { maxProduct } from "./maximum-product-subarray";

describe("maxProduct", () => {
  test("test-1", () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
  });

  test("test-2", () => {
    expect(maxProduct([-2, 0, -1])).toBe(0);
  });
});
