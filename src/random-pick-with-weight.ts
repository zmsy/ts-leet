/**
 * You are given a 0-indexed array of positive integers w where w[i] describes
 * the weight of the ith index.
 *
 * You need to implement the function pickIndex(), which randomly picks an index
 * in the range [0, w.length - 1] (inclusive) and returns it. The probability of
 * picking an index i is w[i] / sum(w).
 */
class Solution {
  prefixes: Array<number>;
  sum: number;

  /**
   * The idea behind this is that we want to create ranges such that, if a rand
   * call falls between that range, we return true for it.
   */
  constructor(w: number[]) {
    this.prefixes = [];
    let sum = 0;
    for (let i = 0; i < w.length; i++) {
      this.prefixes[i] = sum;
      sum += w[i];
    }
    this.sum = sum;
  }

  /**
   * Choose a random number and then search for the portion of the prefixes
   * array that includes it.
   */
  pickIndex(): number {
    const rand = Math.floor(Math.random() * this.sum);
    return priceIsRightSearch(this.prefixes, rand);
  }
}

/**
 * Take in a set of values and return the index of the closest while not going
 * over.
 */
export function priceIsRightSearch(values: number[], target: number): number {
  let lo = 0;
  let hi = values.length - 1;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (target < values[mid]) {
      hi = mid - 1;
    } else {
      lo = mid;
    }
  }

  return lo;
}
