import { ListNode } from "./_util";

/**
 * You are given the heads of two sorted linked lists list1 and list2. Merge the
 * two lists into one sorted list. The list should be made by splicing together
 * the nodes of the first two lists.  Return the head of the merged linked list.
 */
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null && list2 === null) {
    return null;
  } else if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }

  // create a dummy head pointer to start off with.
  const dummy: ListNode | null = new ListNode(-Infinity);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      current = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = list2;
      list2 = list2.next;
    }
  }

  // append the remainder of the lists
  if (list1 === null) {
    current.next = list2;
  } else if (list2 === null) {
    current.next = list1;
  }

  return dummy.next;
}
