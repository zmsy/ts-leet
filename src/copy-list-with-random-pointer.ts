class NodeWithRandom {
  val: number;
  next: NodeWithRandom | null;
  random: NodeWithRandom | null;
  constructor(val?: number, next?: NodeWithRandom, random?: NodeWithRandom) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

/**
 * A linked list of length n is given such that each node contains an additional
 * random pointer, which could point to any node in the list, or null.
 *
 * Construct a deep copy of the list.
 */
function copyRandomList(head: NodeWithRandom | null): NodeWithRandom | null {
  if (!head) {
    return null;
  }

  // pairs of [value, pointer] for each in the list. pointer is stored as an
  // index for the random node.
  const oldToNew = new Map<NodeWithRandom, NodeWithRandom>();
  let current: NodeWithRandom | null = head;
  while (current !== null) {
    const newNode = new NodeWithRandom(current.val);
    oldToNew.set(current, newNode);
    current = current.next;
  }

  current = head;
  while (current !== null) {
    const newNode = oldToNew.get(current);
    newNode!.next = oldToNew.get(current.next!) ?? null;
    newNode!.random = oldToNew.get(current.random!) ?? null;
    current = current.next;
  }

  return oldToNew.get(head) ?? null;
}
