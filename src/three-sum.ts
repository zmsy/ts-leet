/**
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k,
 * and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * 
 * Notice that the solution set must not contain duplicate triplets.
 * @param nums 
 */
export function threeSum(nums: number[]): number[][] {

  // edge case - cannot be 3 sum if there are not three
  // integers
  if (nums.length < 3) {
    return [];
  }

  // outputs are stored as strings of 3 values
  // `{i}-{j}-{k}` as a way of easy comparability
  const outputs = new Set<string>();

  // sort the nums such that the iterative looping in
  // n^2 * n log n instead of n^3
  nums.sort((a, b) => a - b)

  // loop through the individual numbers at each point
  // nums.length - 2 is for l & r pointers
  for (let i = 0; i < (nums.length - 2); i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        outputs.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        k--;
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return [...outputs].map((i) => JSON.parse(i));
};