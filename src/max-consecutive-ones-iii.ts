/**
 * Given a binary array nums and an integer k, return the maximum number of
 * consecutive 1's in the array if you can flip at most k 0's.
 *
 * Idea here is that we'll keep track of the amount of zeroes in any given array
 * and use that to set the fore/back pointers.
 *
 * NOTES: The way this works is by slowly expanding the amount of zeroes you can
 * fit in scope for the flip, allowing you to expand the window of ones at most
 * K times. You allow zeroes until you hit the threshold, then you start moving
 * the back pointer to stop additional ones from being added.
 */
export function longestOnes(nums: number[], k: number): number {
  if (nums.length <= k) {
    return nums.length;
  }

  let i = 0;
  let zeroes = 0;
  let j = 0;
  let best = 0;
  while (j < nums.length) {
    if (nums[j] === 0) {
      zeroes += 1;
    }
    j++;
    if (zeroes > k) {
      if (nums[i] === 0) {
        zeroes -= 1;
      }
      i++;
    }
    best = Math.max(best, j - i);
  }

  return best;
}
