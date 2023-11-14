import { TreeNode } from "./_util";
/**
 * Given the root of a binary tree and an integer targetSum, return all
 * root-to-leaf paths where the sum of the node values in the path equals
 * targetSum. Each path should be returned as a list of the node values, not
 * node references.
 *
 * A root-to-leaf path is a path starting from the root and ending at any leaf
 * node. A leaf is a node with no children.
 */
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const output: ReturnType<typeof pathSum> = [];
  const spelunk = (node: TreeNode | null, path: number[]): void => {
    // we've gone too far!
    if (node === null) {
      return;
    }

    path.push(node.val);

    // this is a leaf node, check to see if it's got the right stuff.
    if (node.left === null && node.right === null) {
      const sum = path.reduce((a, b) => a + b);
      if (sum === targetSum) {
        output.push(path);
      }
    }

    spelunk(node.left, path);
    spelunk(node.right, path);

    path.pop();
  };

  return output;
}
