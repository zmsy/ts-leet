/**
 * Given a sorted array of distinct integers and a
 * target value, return the index if the target is
 * found. If not, return the index where it would
 * be if it were inserted in order.
 */

export function searchInsert(nums: number[], target: number): number {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    const mid = Math.floor((i + j) / 2);
    if (nums[mid] < target) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
  return i;
}
