/**
 * You are climbing a staircase. It takes n steps
 * to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In
 * how many distinct ways can you climb to the top?
 */
export function climbStairs(n: number): number {
  if (n < 3) {
    return n;
  }

  const ways: Array<number> = [1, 2];
  let i = 2; // start at the 3rd index
  while (i < n) {
    ways[i] = ways[i - 1] + ways[i - 2];
    i++;
  }

  return ways[n - 1];
};