import { arrayFromLinkedList, linkedListFromArray } from "./_util";
import { sortList } from "./sort-list";

describe("sortList", () => {
  test("test-1", () => {
    const result = sortList(linkedListFromArray([4, 2, 1, 3]));
    expect(arrayFromLinkedList(result)).toEqual([1, 2, 3, 4]);
  });

  test("test-2", () => {
    const result = sortList(linkedListFromArray([-1, 5, 3, 4, 0]));
    expect(arrayFromLinkedList(result)).toEqual([-1, 0, 3, 4, 5]);
  });
});
