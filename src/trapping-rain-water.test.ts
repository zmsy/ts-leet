import { trap } from "./trapping-rain-water";

describe("trap", () => {
  it("handles the empty array", () => {
    expect(trap([])).toBe(0);
  });

  it("example 1", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
});
