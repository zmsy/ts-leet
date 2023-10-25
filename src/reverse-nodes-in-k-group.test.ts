import { arrayFromLinkedList, linkedListFromArray } from "./_util";
import { reverseKGroup } from "./reverse-nodes-in-k-group";

describe("reverseKGroup", () => {
  it("head = [1,2,3,4,5], k = 2", () => {
    const input = linkedListFromArray([1, 2, 3, 4, 5]);
    const result = reverseKGroup(input, 2);
    const asArray = arrayFromLinkedList(result);
    expect(asArray).toEqual([2, 1, 4, 3, 5]);
  });

  it("head = [1,2,3,4,5], k = 3", () => {
    const input = linkedListFromArray([1, 2, 3, 4, 5]);
    const result = reverseKGroup(input, 2);
    const asArray = arrayFromLinkedList(result);
    expect(asArray).toEqual([3, 2, 1, 4, 5]);
  });

  it("null list", () => {
    expect(reverseKGroup(null, 1)).toBe(null);
  });
});
