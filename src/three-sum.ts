/**
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k,
 * and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 * @param nums
 */
export function threeSum(nums: number[]): number[][] {
  // no solutions if there's not three numbers.
  if (nums.length < 3) {
    return [];
  }

  // sort the list so the triples are in order
  nums.sort((a, b) => a - b);

  // store the indices as string-encoded JSON
  const outputs: Array<[number, number, number]> = [];

  let i = 0;
  while (i < nums.length - 2) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const value = nums[i] + nums[j] + nums[k];
      if (value === 0) {
        outputs.push([nums[i], nums[j], nums[k]]);

        // move pointers forward as far as possible
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }

        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (value > 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }

    // move up as much as we can on this single pass for duplicates.
    i++;
    while (i < nums.length - 2 && nums[i] === nums[i - 1]) {
      i++;
    }
  }

  return outputs;
}
