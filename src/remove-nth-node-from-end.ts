/**
 * 
 */

import { ListNode } from "./_util";

/**
 * Given the head of a linked list, remove the nth node from
 * the end of the list and return its head.
 */
export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let lead = head;
  let follow = head;
  for (let i = 0; i < n; i++) {
    lead = lead!.next;
  }

  // if there's _exactly_ n nodes in the list, remove the
  // first node in the list.
  if (!lead) {
    return head!.next;
  }

  // iterate through the entire list.
  while (lead.next) {
    lead = lead!.next;
    follow = follow!.next;
  }

  // annoying typescript null/undefined handling. this is just mostly
  // workaround for dealing with that BUT the point is to set the next
  // pointer to skip that node.
  follow!.next = follow!.next!.next;

  return head;
}
