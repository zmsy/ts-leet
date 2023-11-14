import { TreeNode } from "./_util";

/**
 * Given the root of a binary tree and an integer targetSum, return the number
 * of paths where the sum of the values along the path equals targetSum.
 *
 * The path does not need to start or end at the root or a leaf, but it must go
 * downwards (i.e., traveling only from parent nodes to child nodes).
 */
export function pathSum(root: TreeNode | null, targetSum: number): number {
  const spelunk = (node: TreeNode | null, path: number[]): number => {
    if (node === null) {
      return 0;
    }

    path.push(node.val);

    let count = 0;
    let sum = 0;
    for (let i = path.length - 1; i >= 0; i--) {
      sum += path[i];
      if (sum === targetSum) {
        count += 1;
      }
    }

    count += spelunk(node.left, path);
    count += spelunk(node.right, path);

    path.pop();

    return count;
  };

  return spelunk(root, []);
}
