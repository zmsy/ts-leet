import { arrayFromLinkedList, linkedListFromArray } from "./_util";
import { reorderList } from "./reorder-list";

describe("reorderList", () => {
  test("test-1", () => {
    const input = linkedListFromArray([1, 2, 3, 4]);
    reorderList(input);
    expect(arrayFromLinkedList(input)).toEqual([1, 4, 2, 3]);
  });

  test("test-2", () => {
    const input = linkedListFromArray([1, 2, 3, 4, 5]);
    reorderList(input);
    expect(arrayFromLinkedList(input)).toEqual([1, 5, 2, 4, 3]);
  });
});
