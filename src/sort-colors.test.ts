import { sortColors } from "./sort-colors";

describe("sortColors", () => {
  test("test-1", () => {
    const colors = [2, 0, 2, 1, 1, 0];
    sortColors(colors);
    expect(colors).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test("test-2", () => {
    const colors = [2, 0, 1];
    sortColors(colors);
    expect(colors).toEqual([0, 1, 2]);
  });
});
