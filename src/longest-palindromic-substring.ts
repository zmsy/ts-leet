/**
 * Longest Palindromic Substring
 *
 * Given a string s, return the longest palindromic substring in s.
 */
export function longestPalindromicSubstring(s: string): string {
  // helper function to check at a specific instance if there's a
  // palindrome starting there.
  const getPalindromeAt = (s: string, i: number, j: number): string => {
    while (i >= 0 && j < s.length) {
      if (s[i] === s[j]) {
        i -= 1;
        j += 1;
      } else {
        break;
      }
    }

    return s.slice(i + 1, j);
  };

  // 0- and 1-length strings are palindromes by default
  if (s.length < 2) {
    return s;
  }

  let best = "";
  let i = 0;
  while (i < s.length) {
    const odd = getPalindromeAt(s, i, i);
    if (odd.length > best.length) {
      best = odd;
    }

    const even = getPalindromeAt(s, i, i + 1);
    if (even.length > best.length) {
      best = even;
    }

    i += 1;
  }

  return best;
}
