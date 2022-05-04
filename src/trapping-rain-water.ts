
export function trap(height: number[]): number {
  if (!height.length) {
    return 0;
  }

  // keep l & r pointers, as well as highest seen
  // for both l & r.
  let l = 0;
  let r = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let output = 0;
  while (l < r) {
    // check if L or R is higher.
    if (height[l] <= height[r]) {
      // if this height is higher, it means we need to
      // increment the left pointer.
      if (height[l] >= maxLeft) {
        maxLeft = height[l];
      } else {
        // Otherwise, it means we're closer to the center
        // than the highest point, and we should collect
        // the water from this column.
        output += maxLeft - height[l];
      }
      l++;
    } else {
      if (height[r] >= maxRight) {
        maxRight = height[r]
      } else {
        output += maxRight - height[r];
      }
      r--;
    }
  }

  return output;
};