import { TreeNode } from "./_util";

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || p === null || q === null) {
    return null;
  }

  const parents: Record<number, number | undefined> = {};
  // queue of [parent, sibling] tuples.
  const queue: Array<[TreeNode | undefined, TreeNode | undefined]> = [
    [undefined, root],
  ];
  while (queue.length > 0) {
    const current = queue.shift()!;
    const [parent, child] = current;
    if (child != undefined) {
      parents[child.val] = parent?.val;
    }

    for (const grand of [child?.left, child?.right]) {
      if (grand != undefined) {
        queue.push([child, grand]);
      }
    }
  }

  const pPath = new Set<number>();
  let pCurrent: number | undefined = p.val;
  while (pCurrent !== undefined) {
    pPath.add(pCurrent);
    pCurrent = parents[pCurrent];
  }

  let qCurrent: number | undefined = q.val;
  while (qCurrent !== undefined) {
    if (pPath.has(qCurrent)) {
      return new TreeNode(qCurrent);
    }
    qCurrent = parents[qCurrent];
  }

  return null;
}
