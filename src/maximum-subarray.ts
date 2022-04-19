/**
 * Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest
 * sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 */
export function maxSubArray(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  let max: number = nums[0]; // overall best max
  let current: number = nums[0]; // current max
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }
  return max;
};