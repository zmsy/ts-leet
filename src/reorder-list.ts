import { ListNode } from "./_util";

/**
 * You are given the head of a singly linked-list. The list can be represented
 * as:
 * L0 → L1 → … → Ln - 1 → Ln
 *
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may
 * be changed.
 */
export function reorderList(head: ListNode | null): void {
  if (!head) {
    return;
  }

  // iterate through the list to find the midpoint.
  let i = 0;
  let current: ListNode | null = head;
  while (current !== null) {
    i += 1;
    current = current.next;
  }

  // once we've gotten the midpoint (using ceil to round up in case there's an
  // odd number of nodes)
  const mid = Math.ceil(i / 2);
  current = head;
  for (let j = 0; j < mid; j++) {
    current = current?.next ?? null;
  }

  // add all second half nodes to a stack
  const nodeStack: Array<ListNode> = [];
  while (current !== null) {
    nodeStack.push(current);
    current = current.next;
  }

  // run through the list, adding each in place of the one before it
  current = head;
  while (nodeStack.length !== 0) {
    const last = nodeStack.pop()!;
    const next: ListNode | null = current?.next ?? null;
    current!.next = last;
    last.next = next;
    current = next;
  }

  if (current !== null) {
    current.next = null;
  }
}
