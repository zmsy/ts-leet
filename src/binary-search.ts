/**
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, write a function to search target in nums. If target exists,
 * then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */
export function search(nums: number[], target: number): number {
  let lo = 0;
  let hi = nums.length - 1;
  let mid: number;

  while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}
