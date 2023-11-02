/**
 * Given an integer array nums, find a subarray that has the largest product,
 * and return the product.
 *
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 */
export function maxProduct(nums: number[]): number {
  if (nums.length < 2) {
    return nums[0];
  }

  let min = nums[0];
  let max = nums[0];
  let bestProduct = nums[0];
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] < 0) {
      // swap numbers if the value is less than 0, because the negatives will
      // cancel each other out.
      [min, max] = [max, min];
    }

    max = Math.max(nums[j], max * nums[j]);
    min = Math.min(nums[j], min * nums[j]);
    bestProduct = Math.max(bestProduct, max);
  }

  return bestProduct;
}
