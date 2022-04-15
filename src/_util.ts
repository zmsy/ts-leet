/**
 * Reusable utility functions.
 */

/** ListNode class definition for iterating. */
export class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  constructor(val: T, next?: ListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Initialize a linked list from an array of values.
 */
export function linkedListFromArray<T>(
  values: Array<T>
): ListNode<T> | null {
  if (!values || values && values.length === 0) {
    return null;
  }

  // initialize the first node
  let firstNode: ListNode<T> | null = null;
  let currentNode: ListNode<T> | null = null;

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

export const arrayFromLinkedList = <T>(node: ListNode<T>): Array<T> => {
  const result: Array<T> = [];
  let pointer: ListNode<T> | null = node;
  while (pointer !== null) {
    result.push(pointer.val);
    pointer = pointer.next;
  }

  return result;
}
