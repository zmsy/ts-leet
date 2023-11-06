/**
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 */
export function longestConsecutive(nums: number[]): number {
  const uniq = new Set(nums);
  const visited = new Set<number>();

  let best = 0;
  for (const num of nums) {
    if (!visited.has(num)) {
      visited.add(num);
      let count = 1;
      let next = num + 1;
      while (uniq.has(next)) {
        visited.add(next);
        count += 1;
        next += 1;
      }
      best = Math.max(best, count);
    }
  }

  return best;
}
