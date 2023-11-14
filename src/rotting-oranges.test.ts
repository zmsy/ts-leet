import { orangesRotting } from "./rotting-oranges";

describe("orangesRotting", () => {
  test("test-1", () => {
    const input = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ];
    expect(orangesRotting(input)).toBe(4);
  });

  test("test-2", () => {
    const input = [[0]];
    expect(orangesRotting(input)).toBe(0);
  });
});
