/**
 * Given an integer array nums, return an array answer such
 * that answer[i] is equal to the product of all the elements
 * of nums except nums[i].
 *
 * No division operation allowed!
 */
export function productExceptSelf(nums: number[]): number[] {
  const outputs: Array<number> = nums.map(() => 1);

  let output = 1;
  for (let i = 0; i < nums.length; i++) {
    outputs[i] *= output;
    output *= nums[i];
  }

  output = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    outputs[i] *= output;
    output *= nums[i];
  }

  return outputs;
}
