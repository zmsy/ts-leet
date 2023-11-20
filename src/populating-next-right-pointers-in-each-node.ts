/**
 *
 */
class Node2 {
  val: number;
  left: Node2 | null;
  right: Node2 | null;
  next: Node2 | null;
  constructor(val?: number, left?: Node2, right?: Node2, next?: Node2) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: Node2 | null): Node2 | null {
  // breadth first search will queue up all of the nodes in the tree correctly
  if (root === null) {
    return null;
  }

  // double the length for each iteration until no more tree
  let len = 1;
  let queue: Array<Node2> = [root];
  while (queue.length > 0) {
    // take the first node out and enqueue left/right pointers
    let prev = queue.shift()!;
    [prev?.left, prev?.right]
      .filter((x) => x !== null)
      .map((n) => queue.push(n!));

    for (let i = 1; i < len; i++) {
      const current = queue.shift();
      [current?.left, current?.right]
        .filter((x) => x !== null)
        .map((n) => queue.push(n!));
      prev.next = current ?? null;
      prev = current!;
    }

    len *= 2;
  }

  return root;
}
