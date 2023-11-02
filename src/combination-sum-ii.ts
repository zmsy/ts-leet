/**
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 */
export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  candidates.sort((a, b) => a - b);

  // iteratively backtracking to prevent OOM from recursion.
  const outputs: Array<Array<number>> = [];

  // populate the queue with an initial set of candidates.
  const search = (left: number, path: number[], idx: number): void => {
    // base case: we hit zero, so this is a match. add the
    // path to the output.
    if (left === 0) {
      outputs.push(path);
      return;
    }

    if (left < 0) {
      return;
    }

    // if not there yet, recurse into lower elements.
    let prev: number | null = null;
    for (let i = idx; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }

      search(left - candidates[i], [...path, candidates[i]], i + 1);
      prev = candidates[i];
    }
  };

  search(target, [], 0);

  return outputs;
}
