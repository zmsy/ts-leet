/**
 * Given an array nums containing n distinct numbers in the range [0, n], return
 * the only number in the range that is missing from the array.
 *
 * Notes;
 * 1. Fastest way to do this is with a closed form. (n * (n + 1)) ? 2 is the
 *    closed form a linear sequence. Count the total and subtract.
 * 2. Another way is with cyclic sort. Sort the nums and see if the pointer
 *    reaches the end.
 */
export function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
}
