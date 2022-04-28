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
 */
export function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }

  let best = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    min = Math.min(min, price);
    best = Math.max(best, price - min);
  }

  return best;
};