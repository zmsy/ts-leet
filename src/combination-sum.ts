/**
 *
 */
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  candidates.sort((a, b) => a - b);
  const output: number[][] = [];

  const search = (left: number, path: number[], idx: number): void => {
    // base case: we hit zero, so this is a match. add the
    // path to the output.
    if (left === 0) {
      output.push([...path]);
      return;
    }

    // if not there yet, recurse into lower elements.
    for (let i = idx; i < candidates.length; i++) {
      const c = candidates[i];
      if (left - c >= 0) {
        path.push(c);
        search(left - c, path, i);
        path.pop();
      }
    }
  };

  search(target, [], 0);
  return output;
}
