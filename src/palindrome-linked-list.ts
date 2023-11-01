import { ListNode } from "./_util";

export function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }

  const array: Array<number> = [];
  let current: ListNode | null = head;
  while (current !== null) {
    array.push(current.val);
    current = current.next;
  }

  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    if (array[i] !== array[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
