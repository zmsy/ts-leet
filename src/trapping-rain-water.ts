export function trap(height: number[]): number {
  if (height.length < 1) {
    return 0;
  }

  // L & R pointers + maximum heights
  let l = 0;
  let r = height.length - 1;
  let lMax = 0;
  let rMax = 0;
  let total = 0;

  while (l < r) {
    if (height[l] <= height[r]) {
      if (height[l] >= lMax) {
        lMax = height[l];
      } else {
        // otherwise, collect the rainwater we've seen
        // so far.
        total += lMax - height[l];
      }
      l++;
    } else {
      if (height[r] >= rMax) {
        rMax = height[r];
      } else {
        total += rMax - height[r];
      }
      r--;
    }
  }

  return total;
}
