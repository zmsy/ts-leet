/**
 * A peak element is an element that is strictly greater than its neighbors.
 *
 * Given a 0-indexed integer array nums, find a peak element, and return its
 * index. If the array contains multiple peaks, return the index to any of the
 * peaks.
 *
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is
 * always considered to be strictly greater than a neighbor that is outside the
 * array.
 *
 * You must write an algorithm that runs in O(log n) time.
 */
export function findPeakElement(nums: number[]): number {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid1 = Math.floor((lo + hi) / 2);
    const mid2 = mid1 + 1;
    if (nums[mid1] >= nums[mid2]) {
      hi = mid1;
    } else {
      lo = mid2;
    }
  }

  return lo;
}
