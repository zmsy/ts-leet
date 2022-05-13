/**
 * Given an integer array nums, return an array answer such
 * that answer[i] is equal to the product of all the elements
 * of nums except nums[i].
 */
export function productExceptSelf(nums: number[]): number[] {
  const output: number[] = Array(nums.length).fill(1);

  // multiply all to the left
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] *= product;
    product *= nums[i];
  }

  // multiply all to the right
  product = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    output[i] *= product;
    product *= nums[i];
  }

  return output;
}
