/**
 * Given an integer array nums, return the length of the longest
 * strictly increasing subsequence
 */
export function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const maxes = nums.map(() => 1);
  let best = 1;

  // for checking the current position
  for (let i = 1; i < nums.length; i++) {
    // for checking all prior positions
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxes[i] = Math.max(maxes[j] + 1, maxes[i]);
      }
    }
    // update the best if there is one.
    best = Math.max(maxes[i], best);
  }

  return best;
}
