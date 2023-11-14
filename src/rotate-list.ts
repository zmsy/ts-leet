import { ListNode } from "./_util";

/**
 * Given the head of a linked list, rotate the list to the right by k places.
 */
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 0) {
    return head;
  }

  // find the length of the list.
  let len = 1;
  let current: ListNode | null = head;
  while (current.next !== null) {
    current = current.next;
    len++;
  }
  const last = current;

  // early exit to deal with the case where there's only a single node, since it
  // doesn't matter how much it was rotated.
  if (len === 1) {
    return head;
  }

  // since we only ever want to rotate the list once, we don't need to actually
  // rotate through it multiple times, modulo to get rid of extra rotations.
  const rotateAmount = k % len;

  // no rotation needed
  if (rotateAmount === 0) {
    return head;
  }

  const dummy = new ListNode(Infinity);
  dummy.next = head;

  current = head;
  for (let i = 0; i < len - rotateAmount - 1; i++) {
    current = current?.next ?? null;
  }

  if (current === null) {
    throw new Error("Went past the end of the list!");
  }

  const newHead = current.next;
  current.next = null;
  last.next = head;
  dummy.next = newHead;

  return dummy.next;
}
