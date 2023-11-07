import { subsetsWithDup } from "./subsets-ii";

describe("subsetsWithDup", () => {
  test("test-1", () => {
    expect(subsetsWithDup([1, 2, 2])).toEqual(
      expect.arrayContaining([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]])
    );
  });

  test("test-2", () => {
    expect(subsetsWithDup([0])).toEqual(expect.arrayContaining([[], [0]]));
  });
});
