import { ListNode } from "./_util";

/**
 * Given the head of a singly linked list, return the middle node of the linked
 * list.
 *
 * If there are two middle nodes, return the second middle node.
 */
export function middleNode(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  // send a pointer through the linked list to find the end.
  let i = 0;
  let current: ListNode | null = head;
  while (current !== null) {
    i += 1;
    current = current.next;
  }

  // find the middle, account for the even number of nodes scenario by choosing
  // the second middle node if so.
  const mid = Math.floor(i / 2);
  current = head;
  for (let j = 0; j < mid; j++) {
    current = current?.next ?? null;
  }

  return current;
}
