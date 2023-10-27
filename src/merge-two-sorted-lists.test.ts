import { ListNode, arrayFromLinkedList, linkedListFromArray } from "./_util";
import { mergeTwoLists } from "./merge-two-sorted-lists";

describe("Merge Two Sorted Lists", () => {
  it("example-1", () => {
    const list1 = linkedListFromArray([1, 2, 4]);
    const list2 = linkedListFromArray([1, 3, 4]);
    const expected = [1, 1, 2, 3, 4, 4];
    const result = arrayFromLinkedList(mergeTwoLists(list1, list2));
    expect(result).toEqual(expected);
  });

  it("example-2", () => {
    const list1: ListNode | null = null;
    const list2: ListNode | null = null;
    const expected: number[] = [];
    const result = arrayFromLinkedList(mergeTwoLists(list1, list2));
    expect(result).toEqual(expected);
  });

  it("example-3", () => {
    const list1: ListNode | null = null;
    const list2 = linkedListFromArray([0]);
    const expected = [0];
    const result = arrayFromLinkedList(mergeTwoLists(list1, list2));
    expect(result).toEqual(expected);
  });

  it("test-1", () => {
    const list1 = linkedListFromArray([1, 3, 5, 7, 9]);
    const list2 = linkedListFromArray([2, 4, 6, 8, 10]);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = arrayFromLinkedList(mergeTwoLists(list1, list2));
    expect(result).toEqual(expected);
  });

  it("test-2", () => {
    const list1 = linkedListFromArray([5, 10, 15, 20, 25]);
    const list2 = linkedListFromArray([3, 6, 9, 12, 18]);
    const expected = [3, 5, 6, 9, 10, 12, 15, 18, 20, 25];
    const result = arrayFromLinkedList(mergeTwoLists(list1, list2));
    expect(result).toEqual(expected);
  });

  it("test-3", () => {
    const list1 = linkedListFromArray([1, 1, 1, 1, 1]);
    const list2 = linkedListFromArray([2, 2, 2, 2, 2]);
    const expected = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
    const result = arrayFromLinkedList(mergeTwoLists(list1, list2));
    expect(result).toEqual(expected);
  });

  it("test-4", () => {
    const list1 = linkedListFromArray([10, 20, 30, 40, 50]);
    const list2 = linkedListFromArray([5, 15, 25, 35, 45]);
    const expected = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const result = arrayFromLinkedList(mergeTwoLists(list1, list2));
    expect(result).toEqual(expected);
  });

  it("test-5", () => {
    const list1 = linkedListFromArray([7, 14, 21, 28, 35]);
    const list2 = linkedListFromArray([6, 12, 18, 24, 30]);
    const expected = [6, 7, 12, 14, 18, 21, 24, 28, 30, 35];
    const result = arrayFromLinkedList(mergeTwoLists(list1, list2));
    expect(result).toEqual(expected);
  });
});
