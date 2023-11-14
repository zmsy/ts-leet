/**
 * You are given two lists of closed intervals, firstList and secondList, where
 * firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list
 * of intervals is pairwise disjoint and in sorted order.
 *
 * Return the intersection of these two interval lists.
 */
export function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  if (firstList.length === 0 || secondList.length === 0) {
    return [];
  }

  const output: number[][] = [];

  const doesOverlap = (a: number[], b: number[]): boolean =>
    (a[0] <= b[1] && b[0] <= a[1]) || (b[0] <= a[1] && a[0] <= b[1]);
  const getOverlap = (a: number[], b: number[]): number[] => [
    Math.max(a[0], b[0]),
    Math.min(a[1], b[1]),
  ];

  // pointers for either list
  let j = 0;
  for (let i = 0; i < firstList.length; i++) {
    // move j up until it overlaps with this interval
    while (j < secondList.length && secondList[j][1] < firstList[i][0]) {
      j++;
    }

    // second iterator to move forward through the list to get every time the
    // other list actually overlaps.
    let j2 = j;
    while (
      j2 < secondList.length &&
      doesOverlap(firstList[i], secondList[j2])
    ) {
      const overlap = getOverlap(firstList[i], secondList[j2]);
      output.push(overlap);
      j2++;
    }
  }

  return output;
}
