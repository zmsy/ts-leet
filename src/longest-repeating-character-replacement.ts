/**
 * You are given a string s and an integer k. You can choose any character of
 * the string and change it to any other uppercase English character. You can
 * perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you can
 * get after performing the above operations.
 */
export function characterReplacement(s: string, k: number): number {
  let best = 0;
  const counts = new Map<string, number>();
  let l = 0; // back pointer
  let maxFreq = 0;
  for (let r = 0; r < s.length; r++) {
    // let's call this our "active" character, the one that we're checking the
    // whole substring against.
    const char = s[r];
    counts.set(char, (counts.get(char) ?? 0) + 1);
    maxFreq = Math.max(maxFreq, counts.get(char) ?? 0);

    // move the back pointer up until the total of non-maxFreq characters is
    // less than or equal to k.
    while (r - l + 1 - maxFreq > k) {
      counts.set(s[l], (counts.get(s[l]) ?? 0) - 1);
      l++;
    }

    best = Math.max(best, r - l + 1);
  }

  return best;
}
