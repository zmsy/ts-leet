/**
 * Given a string s which consists of lowercase or uppercase letters, return the
 * length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome
 * here.
 *
 * Notes: The longest palindrome is a combination of all of the even-numbered
 * letter counts plus the longest odd-number letter count.
 */
export function longestPalindrome(s: string): number {
  const counts = [...s].reduce((acc, curr) => {
    acc[curr] ??= 0;
    acc[curr] += 1;
    return acc;
  }, {} as Record<string, number>);

  let oddCarry = 0;
  let total = 0;
  for (const value of Object.values(counts)) {
    if (value % 2 === 0) {
      total += value;
    } else {
      oddCarry = 1;
      total += value - 1;
    }
  }

  return total + oddCarry;
}
