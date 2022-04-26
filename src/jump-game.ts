/**
 * You are given an integer array nums. You are initially
 * positioned at the array's first index, and each element
 * in the array represents your maximum jump length at
 * that position.
 *
 * Return true if you can reach the last index, or false
 * otherwise.
 */
function canJump(nums: number[]): boolean {
  let maxIdx = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (maxIdx < i) {
          return false;
      }
      maxIdx = Math.max(maxIdx, nums[i] + i);
  }
  
  return true;
};
