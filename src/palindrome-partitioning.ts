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
  const recurse = (part: string): string[][] => {
    if (part.length === 0) {
      return [];
    }

    if (part.length === 1) {
      return [[part]];
    }

    const outputs = new Set<string>();
    if (isPalindrome(part)) {
      outputs.add(JSON.stringify([part]));
    }

    // recurse into lower levels and check each for palindrome
    for (let i = 1; i < part.length; i++) {
      // split the string into two parts, front and back.
      const firstPartPalindromes = recurse(part.slice(0, i));
      const secondPartPalindromes = recurse(part.slice(i));

      // add all of the splits together in their different forms to create new
      // combinations.
      firstPartPalindromes.forEach((pal1) => {
        secondPartPalindromes.forEach((pal2) => {
          outputs.add(JSON.stringify([...pal1, ...pal2]));
        });
      });
    }

    return Array.from(outputs).map((x) => JSON.parse(x));
  };

  return recurse(s);
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
