/**
 * Given a binary array nums, you should delete one element from it.
 *
 * Return the size of the longest non-empty subarray containing only 1's in the
 * resulting array. Return 0 if there is no such subarray.
 */
export function longestSubarray(nums: number[]): number {
  let best = 0;

  let i = 0;
  let zeroes = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) {
      zeroes += 1;
    }

    while (zeroes > 1) {
      if (nums[i] === 0) {
        zeroes -= 1;
      }
      i++;
    }

    best = Math.max(best, j - i);
  }

  return best;
}
