import { TreeNode, treeDiagramString } from "./_util";
/**
 * A path in a binary tree is a sequence of nodes where each pair of adjacent
 * nodes in the sequence has an edge connecting them. A node can only appear in
 * the sequence at most once. Note that the path does not need to pass through
 * the root.
 *
 * The path sum of a path is the sum of the node's values in the path.
 *
 * Given the root of a binary tree, return the maximum path sum of any non-empty
 * path.
 *
 * NOTES: There's three options for a maximum:
 * 1. A path terminating at this node (inclusive)
 * 2. A path terminating just before this node (exclusive)
 * 2. A path going _through_ this node.
 */
export function maxPathSum(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  console.log(treeDiagramString(root));

  let maxSum = -Infinity;
  const recurse = (node: TreeNode | null): number => {
    if (node === null) {
      return 0;
    }
    // recurse down until you've hit the bottom.
    const leftPath = recurse(node.left);
    const rightPath = recurse(node.right);

    // check the *inclusive* option here, which is the max possible for this
    // node. A path that terminates at a lower node would've been caught by the
    // earlier recursion.
    maxSum = Math.max(maxSum, leftPath + rightPath + node.val);
    return Math.max(0, Math.max(leftPath, rightPath) + node.val);
  };

  recurse(root);

  return maxSum;
}
