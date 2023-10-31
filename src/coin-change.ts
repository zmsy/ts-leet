/**
 * You are given an integer array coins representing coins of different
 * denominations and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If
 * that amount of money cannot be made up by any combination of the coins,
 * return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 */
export function coinChange(coins: number[], amount: number): number {
  if (coins.length === 0 || amount === 0) {
    return 0;
  }

  const cache = Array(amount + 1).fill(Infinity);
  cache[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (const coin of coins) {
      const total = i + coin;
      if (total <= amount) {
        cache[total] = Math.min(cache[i] + 1, cache[total]);
      }
    }
  }

  const target = cache[amount];
  return isFinite(target) ? target : -1;
}
