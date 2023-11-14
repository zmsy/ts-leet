/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 * 
 * Each letter in magazine can only be used once in ransomNote.
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
  const magCount: Record<string, number> = {};
  for (const magLetter of magazine) {
    magCount[magLetter] ??= 0;
    magCount[magLetter] += 1;
  }

  for (const letter of ransomNote) {
    if (magCount[letter] === undefined) {
      return false;
    }
    if (magCount[letter] === 0) {
      return false;
    }
    magCount[letter] -= 1;
  }

  return true;
}