/**
 * You are a professional robber planning to rob houses along a
 * street. Each house has a certain amount of money stashed, the
 * only constraint stopping you from robbing each of them is
 * that adjacent houses have security systems connected and it
 * will automatically contact the police if two adjacent houses
 * were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of
 * each house, return the maximum amount of money you can rob
 * tonight without alerting the police.
 */
export function rob(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  // for less than 2, just return the higher of them.
  if (nums.length <= 2) {
    return Math.max(...nums);
  }

  const cache: Record<string, number> = {};
  cache[0] = nums[0];
  cache[1] = Math.max(nums[1], nums[0]);

  for (let i = 2; i < nums.length; i++) {
    const best = Math.max(cache[i - 2] + nums[i], cache[i - 1]);
    cache[i] = best;
  }

  return cache[nums.length - 1];
}
