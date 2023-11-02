/**
 * Given two strings s and t, return true if s is a subsequence of t, or false
 * otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original
 * string by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (i.e., "ace" is a
 * subsequence of "abcde" while "aec" is not).
 */
export function isSubsequence(s: string, t: string): boolean {
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    // increase j until we've found the matching letter
    if (s[i] !== t[j]) {
      while (s[i] !== t[j] && j < t.length) {
        j++;
      }

      if (j >= t.length) {
        return false;
      }
    }

    j++;
  }

  return true;
}
