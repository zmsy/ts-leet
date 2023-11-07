/**
 * Given an array of integers nums containing n + 1 integers where each integer
 * is in the range [1, n] inclusive.
 *
 * There is only one repeated number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and uses only
 * constant extra space.
 *
 * NOTES:
 * - This one is actually used best as a linked list, and done via the fast &
 *   slow pointers approach. You first find the cycle, and then find the
 *   entrance to the cycle.
 * - O(n) time and memory is easily done via HashSet or similar.
 */
export function findDuplicate(nums: number[]): number {
  if (nums.length < 2) {
    return 1;
  }

  // find the cycle in the linked list first, by doing the fast and slow pointer
  // method.
  let slow = 0;
  let fast = 0;
  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (slow === fast) {
      break;
    }
  }

  // find the entrance to the cycle by creating another slow pointer and send
  // it along the list.
  let slow2 = 0;
  while (slow !== slow2) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }

  return slow;
}
