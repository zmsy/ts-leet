/**
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and
 * blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 */
export function sortColors(nums: number[]): void {
  quickSort(nums, 0, nums.length - 1);
}

/**
 * Simple quicksort. Choose a pivot, then operate on the left and right portions
 * of the pivot recursively.
 */
function quickSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    const pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}

function partition(arr: number[], low: number, high: number): number {
  // pivot here is arbitrarily chosen as the highest element.
  const pivot = arr[high];

  // set pointer 1 to left of low end. the low end is moved up increasingly over
  // the iteration to be the place where elements are swapped TO.
  let i = low - 1;
  // iterate _up to and including the high number_
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++; // increment the lower side, and swap the elements.
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // swap the pivot to the place it should be in the list based on where the low
  // pointer ended up, and then return that position.
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
