/**
 * Longest Substring Without Repeating Characters
 *
 * @param s string to check for repeating sequences
 *
 * Commentary: Two pointers (front/back) of active string. Map of last seen char indexes, if dupe update longest. Set back pointer to seen at + 1. Return longest + 1;
 */
export function lengthOfLongestSubstring(s: string): number {
  // edge case: less than or equal to 1 char.
  if (s.length <= 1) {
    return s.length;
  }

  // back and front pointers
  let i = 0;
  let j = 0;
  const seenAt: Record<string, number> = {};
  let longest = 0;
  while (j < s.length) {
    const char = s[j];
    const charSeenAt = seenAt[char];

    // if duplicated, update the back pointer.
    if (charSeenAt !== undefined && i <= charSeenAt) {
      i = charSeenAt + 1;
    }

    // update all the stats.
    longest = Math.max(longest, j - i);
    seenAt[char] = j;
    j += 1;
  }

  return longest + 1;
}
