import { linkedListFromArray, ListNode } from "./_util";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export function mergeKLists(
  lists: Array<ListNode | null>
): ListNode | null {
  const result: Array<number> = [];
  let cache = new Map<number, ListNode | null>();
  lists.forEach((i, idx) => cache.set(idx, i));

  /** Find the current smallest key in the cache. */
  const getBestCacheKey = () => {
    let bestKey: number | null = null;
    let bestVal: number = Infinity;

    for (const key of cache.keys()) {
      const val = cache.get(key)!.val;
      if (val < bestVal) {
        bestKey = key;
        bestVal = val;
      }
    }

    return bestKey
  }

  const advanceLinkedList = (key: number): void => {
    const next = cache.get(key)!.next;
    if (next === null) {
      cache.delete(key);
    } else {
      cache.set(key, next);
    }
  }

  while (cache.size > 0) {
    const bestKey = getBestCacheKey()!;
    const bestVal = cache.get(bestKey)!.val;
    result.push(bestVal);
    advanceLinkedList(bestKey);
  }

  return linkedListFromArray(result);
}
