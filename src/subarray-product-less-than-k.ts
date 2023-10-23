/**
 * Given an array of integers nums and an integer k, return the number
 * of contiguous subarrays where the product of all the elements in the
 * subarray is strictly less than k.
 */
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k < 1 || nums.length < 1) {
    return 0;
  }
  let count = nums[0] < k ? 1 : 0;
  let l = 0;
  let r = 1;
  let product = nums[0];
  while (r < nums.length) {
    // for this one in particular, add one if it's less than k to represent
    // the individual element as an array.
    if (nums[r] < k) {
      count += 1;
    }

    product *= nums[r];

    // if the product is over the limit, bring the rear up.
    while (product >= k && l < r) {
      product /= nums[l];
      l++;
    }

    // add the full window size to the running total.
    count += r - l;
    r += 1;
  }

  return count;
}
