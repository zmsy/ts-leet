/**
 * Merge a list of intervals where they're overlapping.
 */

export function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) {
    return intervals;
  }
  const ints = intervals.sort((a, b) => a[0] - b[0]);

  let n = ints.length;
  let i = 1; // start with the second value and check backwards.
  while (i < n) {
    // check if prior's number is larger than former's
    if (ints[i - 1][1] >= ints[i][0]) {
      ints[i - 1][0] = Math.min(ints[i - 1][0], ints[i][0]);
      ints[i - 1][1] = Math.max(ints[i - 1][1], ints[i][1]);
      ints.splice(i, 1);
      n -= 1;
    } else {
      i += 1
    }
  }

  return ints;
};