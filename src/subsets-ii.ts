/**
 *
 */
export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const output: number[][] = [];

  const recurse = (idx: number, subset: number[]): void => {
    if (idx === nums.length) {
      output.push([...subset]);
      return;
    }

    // Subset that *does* include nums[idx]
    subset.push(nums[idx]);
    recurse(idx + 1, subset);
    subset.pop();

    // move forward until we don't encounter the same problem again.
    while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) {
      idx++;
    }

    // Subset that *does not* include nums[idx] or duplicates
    recurse(idx + 1, subset);
  };

  recurse(0, []);
  return output;
}
