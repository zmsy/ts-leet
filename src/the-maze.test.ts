import { hasPath } from "./the-maze";

describe("hasPath", () => {
  test("test-1", () => {
    const maze = [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
    ];
    const start = [0, 4];
    const end = [4, 4];
    expect(hasPath(maze, start, end)).toBe(true);
  });

  test("test-1", () => {
    const maze = [
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
    ];
    const start = [0, 4];
    const end = [3, 2];
    expect(hasPath(maze, start, end)).toBe(false);
  });
});
