import { arrayFromLinkedList, linkedListFromArray } from "./_util";
import { deleteDuplicates } from "./remove-duplicates-from-sorted-list";

describe("deleteDuplicates", () => {
  test("test-1", () => {
    const input = linkedListFromArray([1, 1, 1]);
    const result = arrayFromLinkedList(deleteDuplicates(input));
    expect(result).toEqual([1]);
  });

  test("test-2", () => {
    const input = linkedListFromArray([1, 1, 2]);
    const result = arrayFromLinkedList(deleteDuplicates(input));
    expect(result).toEqual([1, 2]);
  });

  test("test-3", () => {
    const input = linkedListFromArray([1, 1, 2, 3, 3]);
    const result = arrayFromLinkedList(deleteDuplicates(input));
    expect(result).toEqual([1, 2, 3]);
  });
});
