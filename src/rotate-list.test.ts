import { arrayFromLinkedList, linkedListFromArray } from "./_util";
import { rotateRight } from "./rotate-list";

describe("rotateRight", () => {
  test("test-1", () => {
    const input = linkedListFromArray([1, 2, 3, 4, 5]);
    expect(arrayFromLinkedList(rotateRight(input, 2))).toEqual([4, 5, 1, 2, 3]);
  });
  test("test-2", () => {
    const input = linkedListFromArray([0, 1, 2]);
    expect(arrayFromLinkedList(rotateRight(input, 4))).toEqual([2, 0, 1]);
  });
  test("test-3", () => {
    const input = linkedListFromArray([1]);
    expect(arrayFromLinkedList(rotateRight(input, 1))).toEqual([1]);
  });
  test("test-4", () => {
    const input = linkedListFromArray([1, 2]);
    expect(arrayFromLinkedList(rotateRight(input, 1))).toEqual([2, 1]);
  });
});
