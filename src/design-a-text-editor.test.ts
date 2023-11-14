import { TextEditor } from "./design-a-text-editor";

describe("testTextEditor", () => {
  test("test-1", () => {
    const editor = new TextEditor();
    editor.addText("leetcode");
    expect(editor.deleteText(4)).toBe(4);
    editor.addText("practice");
    expect(editor.cursorRight(3)).toBe("etpractice");
    expect(editor.cursorLeft(8)).toBe("leet");
    expect(editor.deleteText(10)).toBe(4);
    expect(editor.cursorLeft(2)).toBe("");
    expect(editor.cursorRight(6)).toBe("practi");
  });
});
