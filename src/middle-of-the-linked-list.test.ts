import { arrayFromLinkedList, linkedListFromArray } from "./_util";
import { middleNode } from "./middle-of-the-linked-list";

describe("middleNode", () => {
  test("test-1", () => {
    const result = middleNode(linkedListFromArray([1, 2, 3, 4, 5]));
    expect(arrayFromLinkedList(result)).toEqual([3, 4, 5]);
  });

  test("test-2", () => {
    const result = middleNode(linkedListFromArray([1, 2, 3, 4, 5, 6]));
    expect(arrayFromLinkedList(result)).toEqual([4, 5, 6]);
  });
});
