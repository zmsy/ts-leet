import { ListNode } from "./_util";

/**
 * Given a linked list, swap every two adjacent nodes and return its head. You
 * must solve the problem without modifying the values in the list's nodes
 * (i.e., only nodes themselves may be changed.)
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let sentinel = new ListNode(-Infinity);
  sentinel.next = head;
  let prev = sentinel;
  while (prev.next !== null && prev.next.next !== null) {
    const node1 = prev.next; // swap these two
    const node2 = prev.next.next;
    const end = prev.next.next.next;

    node2.next = node1;
    node1.next = end;
    prev.next = node2;

    prev = node1;
  }

  return sentinel.next;
}
