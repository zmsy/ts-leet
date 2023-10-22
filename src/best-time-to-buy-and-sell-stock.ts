/**
 * You are given an array prices where prices[i] is the
 * price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single
 * day to buy one stock and choosing a different day in
 * the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this
 * transaction. If you cannot achieve any profit, return 0.
 *
 * Comments: Loop through and keep track of 1. minimum so far and 2. best profit so far.
 */
export function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }

  let minimum = prices[0];
  let bestProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    bestProfit = Math.max(prices[i] - minimum, bestProfit);
    minimum = Math.min(minimum, prices[i]);
  }

  return bestProfit;
}
