import { TreeNode } from "./_util";


function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || p === null || q === null) {
    return null;
  }
  const upper = Math.max(p.val, q.val);
  const lower = Math.min(p.val, q.val);
  while (true) {
    if (root && root.val && root.val < lower) {
      root = root.right;
    } else if (root && root.val && root.val > upper) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
}

