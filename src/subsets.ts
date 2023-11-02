/**
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in
 * any order.
 */
export function subsets(nums: number[]): number[][] {
  const output: number[][] = [];

  const recurse = (array: number[], index: number): void => {
    output.push(array);

    for (let i = index; i < nums.length; i++) {
      recurse([...array, nums[i]], i + 1);
    }
  };

  recurse([], 0);

  return output;
}
