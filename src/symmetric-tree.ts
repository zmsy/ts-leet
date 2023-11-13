import { TreeNode } from "./_util";

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  let matches = true;
  const recurse = (a: TreeNode | null, b: TreeNode | null): void => {
    // base case, we're past the end of any mismatches
    if (a === null && b === null) {
      return;
    }

    if (a?.val !== b?.val) {
      matches = false;
      return;
    }

    // pass down opposite sides to the recursive call
    recurse(a?.left ?? null, b?.right ?? null);
    recurse(a?.right ?? null, b?.left ?? null);
  };

  recurse(root?.left ?? null, root?.right ?? null);
  return matches;
}
