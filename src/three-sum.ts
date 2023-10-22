/**
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k,
 * and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 * @param nums
 */
export function threeSum(nums: number[]): number[][] {
  // no solutions if there's not three numbers.
  if (nums.length < 3) {
    return [];
  }

  // sort the list so the triples are in order
  nums.sort((a, b) => a - b);

  // store the indices as string-encoded JSON
  const outputs = new Set<string>();

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const value = nums[i] + nums[j] + nums[k];
      if (value === 0) {
        outputs.add([nums[i], nums[j], nums[k]].join("||"));
        k--;
        j++;
      } else if (value > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return [...outputs].map((val) => val.split("||").map((val) => Number(val)));
}
