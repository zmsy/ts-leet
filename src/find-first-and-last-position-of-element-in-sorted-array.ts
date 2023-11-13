/**
 *
 *
 * This just does two binary searches in order to find the lowest and highest
 * insertion points for the duplicate elements.
 */
export function searchRange(nums: number[], target: number): number[] {
  const output: Array<number> = [];

  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] >= target) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  output.push(lo);

  // if we didn't actually find the number in the array, return default
  if (nums[lo] !== target) {
    return [-1, -1];
  }

  // don't reset the lo variable here, since it's guaranteed to at least be
  // the leftmost insertion point
  hi = nums.length - 1;
  while (lo < hi) {
    // use +1 to bias the result towards the right
    const mid = Math.floor((lo + hi) / 2) + 1;
    if (nums[mid] > target) {
      // no equal to here.
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }
  output.push(lo);

  return output;
}
