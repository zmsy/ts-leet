/**
 *
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
  const outputs: Array<boolean> = Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    for (const w of wordDict) {
      // check that the starting point is valid. either it's the
      // start of the string or if the starting point in the string
      // is also reachable
      if (i - w.length === -1 || outputs[i - w.length] === true) {
        if (w === s.slice(i - w.length + 1, i + 1)) {
          outputs[i] = true;
          break;
        }
      }
    };
  }

  return outputs[s.length - 1];
}
