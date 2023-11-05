/**
 * You are given an array of integers nums, there is a sliding window of size k
 * which is moving from the very left of the array to the very right. You can
 * only see the k numbers in the window. Each time the sliding window moves
 * right by one position.
 *
 * Return the max sliding window.
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  // A deque of indices that's used to keep track of maxes. deque[0] represents
  // the max, the back represents all others
  const deque: Array<number> = [];
  const res: Array<number> = [];

  for (let i = 0; i < nums.length; i++) {
    // dequeue any in the front that are smaller than nums[i]
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    // add the next one into the deque at the back.
    deque.push(i);

    // if the first element is older than k values, remove it from the back.
    if (deque[0] === i - k) {
      deque.shift();
    }

    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }

  return res;
}
