/**
 * Working on code that should work in Leetcode.
 */

import { mergeKLists } from "./merge-k-sorted-lists";
import { arrayFromLinkedList, linkedListFromArray, ListNode } from "./_util";

const input: Array<ListNode<number>> = [
  linkedListFromArray([1, 2, 3, 4])!,
  linkedListFromArray([1, 4, 5])!,
  linkedListFromArray([2, 3, 3])!,
]
const result = mergeKLists(input);
const resultArr = arrayFromLinkedList(result!);
console.log("Wow!");
