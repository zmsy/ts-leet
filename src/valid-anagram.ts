/**
 * Given two strings s and t, return true if t is an anagram
 * of s, and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the
 * letters of a different word or phrase, typically using all
 * the original letters exactly once.
 */
export function isAnagram(s: string, t: string): boolean {
  const countChars = (str: string): Record<string, number> => {
    return [...str].reduce((acc, s) => {
      acc[s] ??= 0;
      acc[s] += 1;
      return acc;
    }, {} as Record<string, number>);
  };

  const sCounts = countChars(s);
  const tCounts = countChars(t);
  const chars = new Set<string>([
    ...Object.keys(sCounts),
    ...Object.keys(tCounts),
  ]);
  for (const char of chars) {
    if (sCounts[char] !== tCounts[char]) {
      return false;
    }
  };

  return true;
}
