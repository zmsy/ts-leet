import { combinationSum2 } from "./combination-sum-ii";

describe("combinationSum2", () => {
  test("test-1", () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    const target = 8;
    const result = combinationSum2(candidates, target);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([1, 1, 6]),
        expect.arrayContaining([1, 2, 5]),
        expect.arrayContaining([1, 7]),
        expect.arrayContaining([2, 6]),
      ])
    );
  });

  test("test-2", () => {
    const candidates = [2, 5, 2, 1, 2];
    const target = 5;
    const result = combinationSum2(candidates, target);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([1, 2, 2]),
        expect.arrayContaining([5]),
      ])
    );
  });

  test("test-3", () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    const target = 8;
    const result = combinationSum2(candidates, target);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([1, 1, 6]),
        expect.arrayContaining([1, 2, 5]),
        expect.arrayContaining([1, 7]),
        expect.arrayContaining([2, 6]),
      ])
    );
  });
});
