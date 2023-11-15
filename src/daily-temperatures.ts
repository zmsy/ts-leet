/**
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to
 * wait after the ith day to get a warmer temperature. If there is no future day
 * for which this is possible, keep answer[i] == 0 instead.
 *
 *
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  // the stack holds the ints in the smallest order they've been seen so far
  const stack: Array<number> = [0];
  const output: Array<number> = [];
  for (let i = 1; i < temperatures.length; i++) {
    if (stack.length > 0) {
      while (stack.length && temperatures[i] > temperatures[stack.at(-1)!]) {
        const idx = stack.pop()!;
        output[idx] = i - idx;
      }
    }
    stack.push(i);
  }

  // fill the rest with zeroes if there's stuff left in the stack
  while (stack.length > 0) {
    const idx = stack.pop()!;
    output[idx] = 0;
  }

  return output;
}
