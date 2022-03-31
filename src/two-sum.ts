/**
 * Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 * https://leetcode.com/problems/two-sum/
 * @param nums
 * @param target
 */
export function twoSum(nums: number[], target: number): number[] {
  // key = array value, value = array index
  const hashes: Record<number, number> = {};
  for (const [idx, n] of nums.entries()) {
    const complement = hashes[target - n];
    if (complement !== undefined) {
      // if found, return the value and the index
      return [idx, complement];
    } else {
      hashes[n] = idx;
    }
  }
  return [];
}
