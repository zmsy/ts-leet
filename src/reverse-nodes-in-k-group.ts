import { ListNode } from "./_util";

/**
 * Given the head of a linked list, reverse the nodes of the list k at a
 * time, and return the modified list.
 *
 * k is a positive integer and is less than or equal to the length of
 * the linked list. If the number of nodes is not a multiple of k then
 * left-out nodes, in the end, should remain as it is.
 *
 * You may not alter the values in the list's nodes, only nodes
 * themselves may be changed.
 */
export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  // edge case: no linked list
  if (head === null) {
    return null;
  }

  // edge case: groups are not reversible
  if (k < 2) {
    return head;
  }

  // create a placeholder node to start with. Use a signal value to make
  // it obvious if I've screwed up.
  const sentinel = new ListNode(-Infinity);
  sentinel.next = head;

  let hasEnded = false;

  // start is the node _before_ this k-group, later is the one after.
  let start: ListNode | null = sentinel;
  let end: ListNode | null = null;
  while (!hasEnded) {
    // iterate k times forward. if we reach the end, break so that this
    // portion is not reversed.
    let iterator: ListNode | null = start;
    for (let i = 0; i < k; i++) {
      if (!iterator) {
        hasEnded = true;
        break;
      }
      iterator = iterator?.next ?? null;
    }

    // if we've reached the end of the list, don't bother reversing
    // anything.
    if (hasEnded) {
      break;
    }

    // save the endpoint that we got to. this is what the last node
    // should point to.
    end = iterator?.next ?? null;

    // if we haven't reached the end of the list, reverse the portion
    // we're looking at, starting with the dummy. this only does k - 1
    // iterations to only flip members within the same group
    let node1: ListNode | null = start!.next;
    let node2: ListNode | null = node1?.next ?? null;
    for (let i = 0; i < k - 1; i++) {
      const node3 = node2?.next ?? null;
      node2!.next = node1;
      node1 = node2;
      node2 = node3;
    }

    // point the original start to the end
    start!.next!.next = end;
    start!.next = node1;
    start = node2;
  }

  return sentinel.next;
}
