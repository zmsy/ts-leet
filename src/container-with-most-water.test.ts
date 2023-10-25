import { maxArea } from "./container-with-most-water";

describe("maxArea", () => {
  it("test-1", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("test-2", () => {
    expect(maxArea([1, 1])).toBe(1);
  });
});
