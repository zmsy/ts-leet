/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters
 * of a different word or phrase, typically using all the original
 * letters exactly once.
 */
function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: Record<string, string[]> = {};
  for (const str of strs) {
    const sorted = [...str].sort().join("");
    anagramMap[sorted] ??= [];
    anagramMap[sorted].push(str);
  }
  return Object.values(anagramMap);
};
