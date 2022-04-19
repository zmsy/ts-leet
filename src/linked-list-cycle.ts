
import { ListNode } from "./_util";

/**
 * 
 */
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let iterator = head.next;    
  while (iterator) {
    // object comparison in typescript works because it checks
    // if both operands use the same memory reference (objects
    // are always pass-by-reference). in any other language, i'd
    // use a pointer / identity function here.
    if (iterator === head) {
      // we've been pushed back to the head of the linkedlist
      // so this means there's a cycle.
      return true;
    }
    const newNext = iterator.next;
    iterator.next = head;
    iterator = newNext;
  }

  return false;
};