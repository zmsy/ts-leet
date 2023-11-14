export class TextEditor {
  /**
   * Text is internally represented as an array of single-character strings.
   */
  private text: string[];
  private cursor: number;

  constructor() {
    this.text = [];
    this.cursor = 0;
  }

  /**
   * Add text. This can't really fail, since there's no bounds-checking for
   * adding text into the array.
   */
  addText(text: string): void {
    const inserts = text.split("");
    const len = inserts.length;
    this.text.splice(this.cursor, 0, ...inserts);
    this.cursor += len;
  }

  /**
   * Delete text *can* fail, because it can attempt to move too far left of the
   * string.
   */
  deleteText(k: number): number {
    const newPosition = Math.max(0, this.cursor - k);
    const moveAmount = this.cursor - newPosition;
    this.cursor = newPosition;
    this.text.splice(this.cursor, moveAmount);
    return moveAmount;
  }

  cursorLeft(k: number): string {
    const newPosition = Math.max(0, this.cursor - k);
    this.cursor = newPosition;
    return this.leftString();
  }

  cursorRight(k: number): string {
    const newPosition = Math.min(this.text.length, this.cursor + k);
    this.cursor = newPosition;
    return this.leftString();
  }

  private leftString(): string {
    const strStart = Math.max(0, this.cursor - 10);
    let str = "";
    for (let i = strStart; i < this.cursor; i++) {
      str += this.text[i];
    }
    return str;
  }
}
