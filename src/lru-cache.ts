class LRUNode {
  prev?: LRUNode;
  next?: LRUNode;

  constructor(
    readonly key: number,
    readonly value: number,
    prev?: LRUNode,
    next?: LRUNode
  ) {
    this.prev = prev;
    this.next = next;
  }
}

/**
 * Design a data structure that follows the constraints of a Least Recently Used
 * (LRU) cache.
 */
class LRUCache {
  capacity: number;
  cache: Map<number, LRUNode>;

  // pointers to the linked list.
  left: LRUNode; // least recent
  right: LRUNode; // most recent

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();

    // create pointers for storing the beginning and ends of the list.
    this.left = new LRUNode(0, -Infinity);
    this.right = new LRUNode(0, Infinity);

    // set the doubly-linked list start/end
    this.left.next = this.right;
    this.right.prev = this.left;
  }

  get(key: number): number {
    const node = this.cache.get(key);
    if (node !== undefined) {
      // update LRU stats
      this.removeNode(node);
      this.addNode(node);
      return node.value;
    }

    return -1;
  }

  /**
   * Add this node to the cache, evicting any LRU cache members if needed.
   */
  put(key: number, value: number): void {
    const node = this.cache.get(key);
    if (node !== undefined) {
      this.removeNode(node);
    }
    const newNode = new LRUNode(key, value);
    this.cache.set(key, newNode);
    this.addNode(newNode);

    if (this.cache.size > this.capacity) {
      const remove = this.left.next;
      this.cache.delete(remove?.key!);
      this.removeNode(this.left.next);
    }
  }

  /**
   * Remove a node by connecting the two pointers it has to each other instead
   * of it.
   */
  private removeNode(node: LRUNode | undefined): void {
    if (node === undefined) {
      return;
    }

    // Update the doubly linked list so that we can immediately have the left/
    // right pointers available for use.
    const { prev, next } = node;
    if (prev !== undefined) {
      prev.next = next;
    }
    if (next !== undefined) {
      next.prev = prev;
    }
  }

  /**
   * Insert the node, which always happens at the rightmost node. This is so
   * that we can make it the most recently used in the list.
   */
  private addNode(node: LRUNode | undefined): void {
    if (node === undefined) {
      return;
    }

    const { prev } = this.right;
    if (prev !== undefined) {
      // make the compiler happy
      prev.next = node;
    }
    this.right.prev = node;
    node.next = this.right;
    node.prev = prev;
  }
}
