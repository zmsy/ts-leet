/**
 * Working on code that should work in Leetcode.
 */

import { searchInsert } from "./search-insert-point";

const test1 = [1,3,5,6];
const result1 = searchInsert(test1, 5); // 2

const test2 = [1,3,5,6];
// doesn't exist, should be inserted second val
const result2 = searchInsert(test2, 2); // 10

const test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const result3 = searchInsert(test3, 6);
