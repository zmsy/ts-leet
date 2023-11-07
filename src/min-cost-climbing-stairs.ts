/**
 * You are given an integer array cost where cost[i] is the cost of ith step on
 * a staircase. Once you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 */
export function minCostClimbingStairs(cost: number[]): number {
  if (cost.length < 3) {
    return Math.min(...cost);
  }

  const cache = Array(cost.length + 1).fill(Infinity);
  // you can start from either the first or second step for free
  cache[0] = 0;
  cache[1] = 0;
  for (let i = 0; i <= cost.length; i++) {
    cache[i + 1] = Math.min(cache[i + 1], cache[i] + cost[i]);
    cache[i + 2] = Math.min(cache[i + 2], cache[i] + cost[i]);
  }

  return cache[cost.length];
}
