import { TreeNode } from "./_util";
/**
 *
 */

/*
 * Encodes a tree to a single string. This uses preorder
 * traversal to serialize to a list.
 */
export function serialize(root: TreeNode | null): string {
  const output: Array<number | null> = [];
  const preorder = (node: TreeNode | null): void => {
    // base case, we've reached a leaf node.
    if (node === null) {
      output.push(null);
      return;
    } else {
      output.push(node.val);
      preorder(node.left);
      preorder(node.right);
    }
  };

  preorder(root);
  return JSON.stringify(output);
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  const parsed = JSON.parse(data) as Array<number | null>;

  const dePreorder = (): TreeNode | null => {
    const first = parsed.shift();
    if (first === null) {
      return null;
    }
    const node = new TreeNode(first);
    node.left = dePreorder();
    node.right = dePreorder();
    return node;
  }

  return dePreorder();
}
