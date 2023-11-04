/**
 * You are given an array of non-overlapping intervals intervals where
 * intervals[i] = [starti, endi] represent the start and the end of the ith
 * interval and intervals is sorted in ascending order by starti. You are also
 * given an interval newInterval = [start, end] that represents the start and
 * end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in
 * ascending order by starti and intervals still does not have any overlapping
 * intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 */
export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  if (intervals.length === 0) {
    return [newInterval];
  }

  // Input is sorted, so binary search to find the correct insertion point. The
  // low end will be the insertion point here.
  let lo = 0;
  let hi = intervals.length - 1;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (intervals[mid][0] >= newInterval[0]) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  // check before case for overlap
  if (lo > 0 && intervals[lo - 1][1] >= newInterval[0]) {
    intervals.splice(lo - 1, 1, [
      Math.min(intervals[lo - 1][0], newInterval[0]),
      Math.max(intervals[lo - 1][1], newInterval[1]),
    ]);
    lo = lo - 1;
  } else if (lo === 0 && intervals[0][1] < newInterval[0]) {
    // the binary search said this should be in position 0, so let's check vs.
    // the existing position zero.
    intervals.splice(lo + 1, 0, newInterval);
    lo = lo + 1;
  } else if (lo === intervals.length - 1 && intervals[lo][1] < newInterval[0]) {
    // the binary search said this should be last position, similar check.
    intervals.splice(lo + 1, 0, newInterval);
    lo = lo + 1;
  } else {
    // insert the new interval as-is, since there's no overlap
    intervals.splice(lo, 0, newInterval);
  }

  // check the after case for overlap, which could potentially happen multiple
  // times if the upper bound of this interval overlaps multiple subsequent ones
  while (
    lo < intervals.length - 1 &&
    intervals[lo][1] >= intervals[lo + 1][0]
  ) {
    intervals.splice(lo, 2, [
      Math.min(intervals[lo][0], intervals[lo + 1][0]),
      Math.max(intervals[lo][1], intervals[lo + 1][1]),
    ]);
  }

  return intervals;
}
