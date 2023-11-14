import { floodFill } from "./flood-fill";

describe("floodFill", () => {
  test("test-1", () => {
    const result = floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    );
    expect(result).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });
});
