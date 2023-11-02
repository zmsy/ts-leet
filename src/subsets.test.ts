import { subsets } from "./subsets";

/**
 * Example 1:

Input: nums = [1,2,3]
Output: 

Example 2:

Input: nums = [0]
Output: [[],[0]]

 */
describe("subsets", () => {
  test("test-1", () => {
    expect(subsets([1, 2, 3])).toEqual(
      expect.arrayContaining([
        [],
        [1],
        [2],
        [1, 2],
        [3],
        [1, 3],
        [2, 3],
        [1, 2, 3],
      ])
    );
  });
});
