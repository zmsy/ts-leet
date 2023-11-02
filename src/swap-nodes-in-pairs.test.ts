import { arrayFromLinkedList, linkedListFromArray } from "./_util";
import { swapPairs } from "./swap-nodes-in-pairs";

describe("swapPairs", () => {
  test("test-1", () => {
    const input = linkedListFromArray([1, 2, 3, 4]);
    expect(arrayFromLinkedList(swapPairs(input))).toEqual([2, 1, 4, 3]);
  });

  test("test-2", () => {
    const input = linkedListFromArray([1, 2, 3, 4, 5]);
    expect(arrayFromLinkedList(swapPairs(input))).toEqual([2, 1, 4, 3, 5]);
  });

  test("test-3", () => {
    expect(arrayFromLinkedList(swapPairs(null))).toEqual([]);
  });
});
