/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1,
 * or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of
 * s2.
 */
export function checkInclusion(s1: string, s2: string): boolean {
  // counts of all of the letters in s1, since we're finding a permutation.
  const s1Counts = [...s1].reduce((acc, curr) => {
    acc[curr] ??= 0;
    acc[curr] += 1;
    return acc;
  }, {} as Record<string, number>);

  // keep track of the permutations found in the second string so far.
  let i = 0;
  let s2Counts: Record<string, number> = {};
  for (let j = 0; j < s2.length; j++) {
    // if the new letter isn't part of the counter, reset the counter and move
    // the pointers up.
    const letter = s2[j];

    // add to the existing counts.
    s2Counts[letter] ??= 0;
    s2Counts[letter] += 1;

    // move up the back pointer if required, because we've found a character too
    // many times for s1.
    while (j - i > s1.length - 1) {
      s2Counts[s2[i]] -= 1;
      i++;
    }

    // check for victory condition: we've found a permutation! this means that
    // there's nothing left of any of the values.
    if (
      Object.entries(s1Counts).every(([key, value]) => {
        return s2Counts[key] === value;
      })
    ) {
      return true;
    }
  }

  return false;
}
