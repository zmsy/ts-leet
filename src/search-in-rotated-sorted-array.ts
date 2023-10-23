/**
 * Searching in the rotated sorted array is done by doing two binary
 * searches:
 * 1. Find the minimum, which is done by binary search.
 * 2. Perform a binary search, using the midpoint as a modulo.
 */

export function search(nums: number[], target: number): number {
  if (nums.length === 0) {
    return -1;
  }

  // first binary search: find the pivot here, to be used as the
  // modulo.
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    // if the midpoint number is higher than the high end, the pivot
    // is in the second half.
    if (nums[mid] >= nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  // the pivot is the one on the lower end here.
  const pivot = lo;

  // perform the second binary search, offset by the value of the pivot.
  // this means we need to modulo whenever we look up values in the array
  let lo2 = pivot;
  let hi2 = nums.length + pivot;
  while (lo2 < hi2) {
    const mid = Math.floor((lo2 + hi2) / 2);
    const midModulo = mid % nums.length;
    const currentVal = nums[midModulo];
    if (currentVal === target) {
      // return the modulo here, so that it's actually in the array.
      return midModulo;
    } else if (currentVal >= target) {
      hi2 = mid;
    } else {
      lo2 = mid + 1;
    }
  }

  // if the number's not located in the array, return -1.
  return -1;
}
