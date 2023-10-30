/**
 * Reusable utility functions.
 */

export function assertEquals<T>(left: T, right: T): void {
  if (left !== right) {
    throw new Error(`assertEquals error: ${left} does not equal ${right}.`);
  }
}

/** ListNode class definition for iterating. */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Initialize a linked list from an array of values.
 */
export function linkedListFromArray(values: Array<number>): ListNode | null {
  if (!values || (values && values.length === 0)) {
    return null;
  }

  // initialize the first node
  let firstNode: ListNode | null = null;
  let currentNode: ListNode | null = null;

  for (const val of values) {
    const newNode = new ListNode(val);
    if (!firstNode) {
      firstNode = newNode;
    } else {
      currentNode!.next = newNode;
    }
    currentNode = newNode;
  }

  return firstNode;
}

export const arrayFromLinkedList = (node: ListNode | null): Array<number> => {
  if (node === null) {
    return [];
  }

  const result: Array<number> = [];
  let pointer: ListNode | null = node;
  while (pointer !== null) {
    result.push(pointer.val);
    pointer = pointer.next;
  }

  return result;
};

export const treeFromArray = (array: Array<number | null>): TreeNode | null => {
  if (array.length === 0) {
    return null;
  }

  const root = new TreeNode(array[0] as number);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (i < array.length) {
    const current = queue.shift();
    if (!current) {
      break;
    }

    if (array[i] !== null) {
      current.left = new TreeNode(array[i] as number);
      queue.push(current.left);
    }
    i++;

    if (i < array.length && array[i] !== null) {
      current.right = new TreeNode(array[i] as number);
      queue.push(current.right);
    }
    i++;
  }

  return root;
};

export const arrayFromTree = (root: TreeNode | null): (number | null)[] => {
  if (!root) {
    return [];
  }

  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current) {
      result.push(current.val);
      queue.push(current.left);
      queue.push(current.right);
    } else {
      result.push(null);
    }
  }

  // Remove trailing null values
  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
};

export const treeDiagramString = (
  root: TreeNode | null,
  prefix = "",
  isLeft = true,
  str = ""
): string => {
  if (!root) {
    return str;
  }

  if (root.right) {
    str = treeDiagramString(
      root.right,
      prefix + (isLeft ? "│   " : "    "),
      false,
      str
    );
  }

  str += prefix + (isLeft ? "└── " : "┌── ") + root.val + "\n";

  if (root.left) {
    str = treeDiagramString(
      root.left,
      prefix + (isLeft ? "    " : "│   "),
      true,
      str
    );
  }

  return str;
};
