/**
 * Working on code that should work in Leetcode.
 */

import { assertEquals } from "./_util";
import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";

const result1 = lengthOfLongestSubstring("abcabcbb");
assertEquals(result1, 3);

const result2 = lengthOfLongestSubstring("bbbbb");
assertEquals(result2, 1);

const result3 = lengthOfLongestSubstring("au");
assertEquals(result3, 3);

console.log();
