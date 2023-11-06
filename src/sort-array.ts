/**
 * Given an array of integers nums, sort the array in ascending order and return
 * it.
 *
 * You must solve the problem without using any built-in functions in O(nlog(n))
 * time complexity and with the smallest space complexity possible.
 */
export function sortArray(nums: number[]): number[] {
  if (nums.length >= 2) {
    const mid = Math.floor(nums.length / 2);

    const leftArr = nums.slice(0, mid);
    const rightArr = nums.slice(mid);
    const left = sortArray(leftArr);
    const right = sortArray(rightArr);

    return merge(left, right);
  }

  return nums;
}

function merge(a: number[], b: number[]): number[] {
  const sorted: number[] = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      sorted.push(a.shift()!);
    } else {
      sorted.push(b.shift()!);
    }
  }

  return [...sorted, ...a, ...b];
}
