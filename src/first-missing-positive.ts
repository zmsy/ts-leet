/**
 * Given an unsorted integer array nums, return the smallest missing positive
 * integer.
 *
 * You must implement an algorithm that runs in O(n) time and uses O(1)
 * auxiliary space.
 *
 * Thoughts/notes:
 * - O(1) auxiliary space means it *must* be in place.
 * - O(n) time means it must happen on single pass loops.
 */
export function firstMissingPositive(nums: number[]): number {
  // loop through and put the numbers in their array locations.
  let i = 0;
  while (i < nums.length) {
    const val = nums[i];
    const valIdx = val - 1;
    if (val > 0 && val <= nums.length && val !== nums[valIdx]) {
      [nums[i], nums[valIdx]] = [nums[valIdx], nums[i]];
    } else {
      i++;
    }
  }

  // loop through and find the missing first one.
  let j = 0;
  while (j < nums.length) {
    if (nums[j] !== j + 1) {
      return j + 1;
    }
    j++;
  }

  // return the next element if everything's copacetic
  return nums.length + 1;
}
