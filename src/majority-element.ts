/**
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You
 * may assume that the majority element always exists in the array.
 */
export function majorityElement(nums: number[]): number {
  const counts: Record<number, number> = {};
  for (const num of nums) {
    counts[num] = (counts[num] ?? 0) + 1;
  }

  let bestNum = nums[0];
  let bestCount = counts[nums[0]];
  Object.entries(counts).forEach(([num, count]) => {
    if (count > bestCount) {
      bestCount = count;
      bestNum = Number(num); // Object keys are strings.
    }
  });

  return bestNum;
}
