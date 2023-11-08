/**
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has
 * piles[i] bananas. The guards have gone and will come back in h hours.
 *
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she
 * chooses some pile of bananas and eats k bananas from that pile. If the pile
 * has less than k bananas, she eats all of them instead and will not eat any
 * more bananas during this hour.
 *
 * Koko likes to eat slowly but still wants to finish eating all the bananas
 * before the guards return.
 *
 * Return the minimum integer k such that she can eat all the bananas within h
 * hours.
 */
export function minEatingSpeed(piles: number[], h: number): number {
  const getTimeToEat = (rate: number) =>
    piles.reduce((a, b) => a + Math.ceil(b / rate), 0);

  // Max is the starting point here: We know that it's the maximum integer that
  // koko would have to eat in order to be able to finish all of the piles.
  let max = Math.max(...piles);
  let l = 1;
  let r = max;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    const time = getTimeToEat(mid);
    if (time > h) {
      // this took too long, we need to move higher and eat faster.
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return r;
}
