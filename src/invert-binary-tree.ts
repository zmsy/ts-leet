import { TreeNode } from "./_util";

/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Note: Invert in this context means flip left/right, not invert
 * the child to be the parent.
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }
  const q: Array<TreeNode> = [root];
  while (q.length > 0) {
    const node = q.shift()!;
    [node.left, node.right] = [node.right, node.left]
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }

  return root;
}
