import { ListNode } from "./_util";

/**
 *
 */
export function sortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const values: Array<number> = [];
  let current: ListNode | null = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  // sort the values ascending
  values.sort((a, b) => a - b);

  let sentinel = new ListNode(-Infinity);
  current = sentinel;
  for (let i = 0; i < values.length; i++) {
    const node = new ListNode(values[i]);
    current.next = node;
    current = node;
  }

  return sentinel.next;
}
