/**
 * Longest Palindromic Substring
 *
 * Given a string s, return the longest palindromic substring in s.
 */
export function longestPalindrome(s: string): string {
  // any string of length < 2 is a palindrome
  if (s.length < 2) {
    return s;
  }

  // given two indices into a string, find the palindrome at that index.
  const helper = (i: number, j: number): string => {
    let l = i;
    let r = j;
    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        l--;
        r++;
      } else {
        break;
      }
    }

    return s.slice(l + 1, r);
  };

  let longest = "";
  for (let i = 0; i < s.length; i++) {
    const odd = helper(i, i);
    if (odd.length > longest.length) {
      longest = odd;
    }

    const even = helper(i, i + 1);
    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
}
