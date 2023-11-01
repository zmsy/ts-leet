import { linkedListFromArray } from "./_util";
import { isPalindrome } from "./palindrome-linked-list";

describe("isPalindromeLinkedList", () => {
  test("test-1", () => {
    const list = [1, 2, 2, 1];
    expect(isPalindrome(linkedListFromArray(list))).toBe(true);
  });

  test("test-2", () => {
    const list = [1, 2];
    expect(isPalindrome(linkedListFromArray(list))).toBe(false);
  });
});
