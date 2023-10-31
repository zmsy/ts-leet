/**
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * NOTES: Keep a lagging pointer indicating the back of the zeroes range.
 */
export function moveZeroes(nums: number[]): void {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      const val = nums[j];
      nums[j] = nums[i];
      nums[i] = val;
      i++;
    }
  }
}
