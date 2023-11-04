/**
 * Given a string s, partition s such that every substring of the partition is a
 * palindrome. Return all possible palindrome partitioning of s.
 *
 * NOTES:
 * - Goal here is that we loop through and find all possible palindromes, and
 *   then do a backtracking loop to get all partitions that make sense.
 * - Alternately, could do this recursively and partition each subsequent sub-
 *   string and check for partitions.
 */
export function partition(s: string): string[][] {
  const outputs: string[][] = [];

  const recurse = (idx: number, array: string[]): void => {
    // null case, we've gone past the end. Win!
    if (idx === s.length) {
      outputs.push(array);
      return;
    }

    for (let i = idx; i < s.length; i++) {
      const slice = s.slice(idx, i + 1);
      if (isPalindrome(slice)) {
        recurse(i + 1, [...array, slice]);
      }
    }
  };

  recurse(0, []);
  return outputs;
}

function isPalindrome(possible: string): boolean {
  let i = 0;
  let j = possible.length - 1;
  while (i < j) {
    if (possible[i] === possible[j]) {
      i += 1;
      j -= 1;
    } else {
      return false;
    }
  }

  return true;
}
