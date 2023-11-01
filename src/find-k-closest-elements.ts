/**
 * Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
 *
 * An integer a is closer to x than an integer b if:
 * - `|a - x| < |b - x|`, or
 * - `|a - x| == |b - x|` and `a < b`
 */
export function findClosestElements(
  arr: number[],
  k: number,
  x: number
): number[] {
  // edge cases: make sure k is valid.
  if (k > arr.length) {
    return arr;
  }
  if (k < 1) {
    return [];
  }

  // binary search to find the target number first, or use the bounds of the
  // array to determine that it's outside of the array.
  let targetIdx: number = 0;
  if (x < arr[0]) {
    targetIdx = -1; // target is below array bounds
  } else if (x > (arr.at(-1) ?? -1)) {
    targetIdx = arr.length - 1; // target is above array bounds.
  } else {
    // target is within array bounds, binary search.
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
      // outcome of this binary search is that lo = target index.
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid] === x) {
        targetIdx = mid;
        break;
      } else if (arr[mid] < x) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    // for the times when the actual number isn't found, determine which between
    // the lower/upper number is actually correct here.
    if (arr[targetIdx] !== x) {
      targetIdx = isCloser(arr[lo - 1], arr[lo], x) ? lo - 1 : lo;
    }
  }

  // create two pointers and move them outwards from the list.
  let i = targetIdx;
  let j = targetIdx + 1;
  const closest: Array<number> = []; // start with x in closest list
  while (closest.length < k) {
    if (isCloser(arr[i], arr[j], x)) {
      closest.unshift(arr[i]); // prepend lower numbers to beginning
      i--;
    } else {
      closest.push(arr[j]); // append higher numbers to end.
      j++;
    }
  }

  return closest;
}

/**
 * Check which of two numbers is closer. This purposefully allows for undefined
 * numbers outside of the array, and considers valid numbers *within* the array
 * to be closer by default.
 */
function isCloser(
  a: number | undefined,
  b: number | undefined,
  target: number
): boolean {
  const aNum = a ?? -Infinity; // left hand side, smaller than target
  const bNum = b ?? Infinity; // right hand side, larger than target
  const aDistance = Math.abs(target - aNum);
  const bDistance = Math.abs(target - bNum);
  if (aDistance === bDistance) {
    // There could be some `isFinite` checking here, but I'm omitting it because
    // the constraints of the test say that it's not a valid edge case.
    return aNum <= bNum;
  } else {
    return aDistance < bDistance;
  }
}
