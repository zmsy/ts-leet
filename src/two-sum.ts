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
  const valueToIndex: Record<number, number> = {};
  for (const [index, num] of nums.entries()) {
    // the complement is what this adds up to in order to get the target
    const complement = target - num;
    const complementIdx = valueToIndex[complement];
    if (complementIdx !== undefined) {
      return [index, complementIdx];
    } else {
      valueToIndex[num] = index;
    }
  }

  // no solution exists, make the compiler happy
  return [];
}
