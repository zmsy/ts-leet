import { priceIsRightSearch } from "./random-pick-with-weight";

describe("priceIsRightSearch", () => {
  test("test-1", () => {
    expect(priceIsRightSearch([0, 3, 17, 18], 21)).toBe(3);
  });

  test("test-2", () => {
    expect(priceIsRightSearch([0, 3, 17, 18], 4)).toBe(1);
  });

  test("test-3", () => {
    expect(priceIsRightSearch([0, 3, 17, 18], 0)).toBe(0);
  });

  test("test-4", () => {
    expect(priceIsRightSearch([0, 3, 17, 18], 17)).toBe(2);
  });
});
