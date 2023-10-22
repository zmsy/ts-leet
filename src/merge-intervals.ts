/**
 * Merge a list of intervals where they're overlapping.
 */

export function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) {
    // base case, return any non-mergeable lists
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);
  // start with i = 1 and always look backwards
  let i = 1;
  let n = intervals.length;
  while (i < n) {
    // check if large element of last >= smaller element of current
    if (intervals[i - 1][1] >= intervals[i][0]) {
      const lower = Math.min(intervals[i - 1][0], intervals[i][0]);
      const upper = Math.max(intervals[i - 1][1], intervals[i][1]);
      intervals[i - 1] = [lower, upper];
      // remove the current interval
      intervals.splice(i, 1);
      n -= 1;
    } else {
      i += 1;
    }
  }

  return intervals;
}
