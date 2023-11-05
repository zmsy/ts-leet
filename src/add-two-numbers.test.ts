import { linkedListFromArray, arrayFromLinkedList } from "./_util";
import { addTwoNumbers } from "./add-two-numbers";

describe("addTwoNumbers", () => {
  test("test-1", () => {
    const l1 = linkedListFromArray([2, 4, 3]);
    const l2 = linkedListFromArray([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(arrayFromLinkedList(result)).toEqual([7, 0, 8]);
  });

  test("test-2", () => {
    const l1 = linkedListFromArray([0]);
    const l2 = linkedListFromArray([0]);
    const result = addTwoNumbers(l1, l2);
    expect(arrayFromLinkedList(result)).toEqual([0]);
  });

  test("test-3", () => {
    const l1 = linkedListFromArray([9, 9, 9, 9, 9, 9, 9]);
    const l2 = linkedListFromArray([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    expect(arrayFromLinkedList(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });

  test("test-4", () => {
    const l1 = linkedListFromArray([
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1,
    ]);
    const l2 = linkedListFromArray([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(arrayFromLinkedList(result)).toEqual([
      6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1,
    ]);
  });
});
