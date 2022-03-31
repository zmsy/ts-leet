/**
 * Longest Substring Without Repeating Characters
 *
 * @param s string to check for repeating sequences
 */
function longestNonRepeatingSubstring(s: string): number {
  if (s.length <= 1) {
    return s.length;
  }

  let longest: number = 0;
  let currentChars = new Map<string, number>();
  let i: number = 0;
  let j: number = 0;
  while (j < s.length) {
    const newChar = s[j];
    const newCharSeenAt = currentChars.get(newChar);
    // base case, duplicated letter. kill the sequence, check if longest,
    // start a new sequence.
    if (newCharSeenAt !== undefined && i <= newCharSeenAt!) {
      i = newCharSeenAt + 1;
    }

    // adding the current character and updating the forward pointer
    longest = Math.max(longest, j - i);
    currentChars.set(newChar, j);
    j += 1;
  }

  return longest + 1;
}
