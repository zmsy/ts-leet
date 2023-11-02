export function permute(nums: number[]): number[][] {
  const outputs: number[][] = [];

  const recursivePermute = (list: number[], others: number[]) => {
    if (list.length === nums.length) {
      outputs.push(list);
    }

    for (const [otherIdx, other] of others.entries()) {
      recursivePermute(
        [...list, other],
        others.filter((_val, idx) => idx !== otherIdx)
      );
    }
  };

  recursivePermute([], [...nums]);
  return outputs;
}
