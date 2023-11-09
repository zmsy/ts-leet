import { ListNode } from "./_util";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (slow !== null && fast !== null) {
    if (slow.val === fast.val) {
      const next = fast.next;
      slow.next = next;
      fast = next;
    } else {
      slow = fast;
      fast = fast.next;
    }
  }

  return head;
}
