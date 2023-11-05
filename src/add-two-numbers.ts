import { ListNode } from "./_util";

/**
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null || l2 === null) {
    return null;
  }

  const number1 = toNumberStr(l1);
  const number2 = toNumberStr(l2);
  const total = BigInt(number1) + BigInt(number2);
  return toList(total);
}

function toNumberStr(node: ListNode): string {
  let str = "";
  let current: ListNode | null = node;
  while (current !== null) {
    str = current.val.toString() + str;
    current = current.next;
  }

  return str;
}

function toList(num: BigInt): ListNode {
  const nodes = num
    .toString()
    .split("")
    .map((s) => Number(s));
  const dummy = new ListNode(-Infinity);
  let current: ListNode = dummy;
  for (let i = nodes.length - 1; i >= 0; i--) {
    current.next = new ListNode(nodes[i]);
    current = current.next;
  }

  return dummy.next!;
}
