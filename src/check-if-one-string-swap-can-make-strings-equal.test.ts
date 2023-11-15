import { areAlmostEqual } from "./check-if-one-string-swap-can-make-strings-equal";

describe("areAlmostEqual", () => {
  test("test-1", () => {
    expect(areAlmostEqual("bank", "kanb")).toBe(true);
  });
});
