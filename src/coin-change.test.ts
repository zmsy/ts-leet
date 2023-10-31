import { coinChange } from "./coin-change";

describe("Coin Change", () => {
  test("test-1", () => {
    const coins = [1, 2, 5];
    const amount = 11;
    const expected = 3;
    const result = coinChange(coins, amount);
    expect(result).toEqual(expected);
  });

  test("test-2", () => {
    const coins = [2];
    const amount = 3;
    const expected = -1;
    const result = coinChange(coins, amount);
    expect(result).toEqual(expected);
  });

  test("test-3", () => {
    const coins = [1];
    const amount = 0;
    const expected = 0;
    const result = coinChange(coins, amount);
    expect(result).toEqual(expected);
  });
});
