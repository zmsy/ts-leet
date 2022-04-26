/**
 * Check if the string provided is a palindrome when
 * excluding all non-alphanumeric characters.
 */
export function isPalindrome(s: string): boolean {

  const trimmed = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  if (trimmed.length < 2) {
    return true;
  }

  let i = 0;
  let j = trimmed.length - 1;
  while (i < j) {
    if (trimmed[i] === trimmed[j]) {
      i += 1;
      j -= 1;
    } else {
      return false;
    }
  }

  return true;
};