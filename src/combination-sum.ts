/**
 *
 */
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  candidates.sort((a, b) => a - b);
  const output: number[][] = [];

  const search = (left: number, path: number[]): void => {
    // base case: we hit zero, so this is a match. add the
    // path to the output.
    if (left === 0) {
      output.push(path);
      return;
    }

    // if not there yet, recurse into lower elements.
    for (const c of candidates.filter((x) => left - x >= 0)) {
      search(left - c, [...path, c]);
    }
  };

  search(target, []);
  // return a version of the result with only unique outputs.
  const uniq = Array.from(
    new Map(output.map((i) => [i.sort().join(), i])).values()
  );
  return uniq;
}
