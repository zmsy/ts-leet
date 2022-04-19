/**
 * Reusable utility functions.
 */

/** ListNode class definition for iterating. */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Initialize a linked list from an array of values.
 */
export function linkedListFromArray(
  values: Array<number>
): ListNode | null {
  if (!values || values && values.length === 0) {
    return null;
  }

  // initialize the first node
  let firstNode: ListNode | null = null;
  let currentNode: ListNode | null = null;

  for (const val of values) {
    const newNode = new ListNode(val);
    if (!firstNode) {
      firstNode = newNode;
    } else {
      currentNode!.next = newNode;
    }
    currentNode = newNode;
  }

  return firstNode;
}

export const arrayFromLinkedList = (node: ListNode): Array<number> => {
  const result: Array<number> = [];
  let pointer: ListNode | null = node;
  while (pointer !== null) {
    result.push(pointer.val);
    pointer = pointer.next;
  }

  return result;
}
