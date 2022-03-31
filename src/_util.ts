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
export function constructLinkedListFromArray<T>(
  values: Array<T>
): ListNode<T> | null {
  const firstNode = values.shift();
  if (!firstNode) {
    return null;
  }

  // initialize the first node
  const head: ListNode<T> = {
    val: firstNode,
    next: null,
  };

  let mover = head;
  while (values.length > 0) {
    const nextVal = values.shift();
    if (nextVal) {
      const nextNode = {
        val: nextVal,
        next: null,
      }
      mover.next = nextNode;
      mover = nextNode;
    }
  }

  return head;
}
