/**
 * You are given an integer array height of length n. There
 * are n vertical lines drawn such that the two endpoints of
 * the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 */
export function maxArea(height: number[]): number {
  if (height.length < 2) {
    return 0;
  }

  let i = 0;
  let j = height.length - 1;
  let best = 0;

  while (i < j) {
    const volume = (j - i) * Math.min(height[i], height[j]);
    best = Math.max(best, volume);

    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return best;
}
