/**
 * A version of contains-duplicate that uses a bitmask instead of a Map.
 */
export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}
