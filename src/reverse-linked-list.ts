import { ListNode } from "./_util";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function reverseList(
  head: ListNode | null
): ListNode | null {
  if (!head) return null;
  let previous = head;
  let next = previous.next || null;
  previous.next = null;
  while (next) {
    const newNext = next.next;
    next.next = previous;
    previous = next;
    next = newNext;
  }
  return previous;
}
