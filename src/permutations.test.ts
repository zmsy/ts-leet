import { permute } from "./permutations";

describe("permute", () => {
  test("test-1", () => {
    expect(permute([1, 2, 3])).toEqual(
      expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ])
    );
  });

  test("test-2", () => {
    expect(permute([0, 1])).toEqual(
      expect.arrayContaining([
        [0, 1],
        [1, 0],
      ])
    );
  });

  test("test-3", () => {
    expect(permute([1])).toEqual([[1]]);
  });
});
