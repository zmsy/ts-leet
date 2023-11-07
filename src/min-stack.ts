class MinStack {
  valueStack: Array<number>;
  minStack: Array<number>;

  constructor() {
    this.valueStack = [];
    this.minStack = [];
  }

  push(val: number): void {
    if (this.valueStack.length === 0) {
      this.valueStack.push(val);
      this.minStack.push(val);
    } else {
      this.valueStack.push(val);
      this.minStack.push(Math.min(this.minStack.at(-1)!, val));
    }
  }

  pop(): void {
    this.valueStack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.valueStack.at(-1)!;
  }

  getMin(): number {
    return this.minStack.at(-1)!;
  }
}
