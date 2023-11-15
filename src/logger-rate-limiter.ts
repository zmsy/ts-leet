class Logger {
  private timings: Record<string, number>;

  constructor() {
    this.timings = {};
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const threshold = Math.max(this.timings[message] ?? -1, timestamp);
    if (timestamp >= threshold) {
      this.timings[message] = timestamp + 10;
      return true;
    }
    return false;
  }
}
