/**
 * Given an integer array nums sorted in non-decreasing order, return an array
 * of the squares of each number sorted in non-decreasing order.
 */
export function sortedSquares(nums: number[]): number[] {
  const sorted: Array<number> = Array(nums.length).fill(null);
  let i = 0;
  let j = nums.length - 1;
  let y = nums.length - 1;

  while (i <= j) {
    const iSq = nums[i] ** 2;
    const jSq = nums[j] ** 2;
    if (iSq >= jSq) {
      sorted[y] = iSq;
      i++;
    } else {
      sorted[y] = jSq;
      j--;
    }
    y--;
  }

  return sorted;
}
