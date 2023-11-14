export class MyQueue {
  private inStack: Array<number>;
  private outStack: Array<number>;
  private front: number | null;

  constructor() {
    this.inStack = [];
    this.outStack = [];
    this.front = null;
  }

  push(x: number): void {
    if (this.inStack.length === 0) {
      this.front = x;
    }
    this.inStack.push(x);
  }

  pop(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length) {
        this.outStack.push(this.inStack.pop()!);
      }
    }

    return this.outStack.pop()!;
  }

  peek(): number {
    if (this.outStack.length > 0) {
      return this.outStack.at(-1)!;
    }
    return this.front!;
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
