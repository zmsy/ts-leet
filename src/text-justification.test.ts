import { fullJustify } from "./text-justification";

describe("fullJustify", () => {
  test("test-1", () => {
    const input = [
      "This",
      "is",
      "an",
      "example",
      "of",
      "text",
      "justification.",
    ];
    const width = 16;
    expect(fullJustify(input, width)).toEqual([
      "This    is    an",
      "example  of text",
      "justification.  ",
    ]);
  });

  test("test-2", () => {
    const input = ["What", "must", "be", "acknowledgment", "shall", "be"];
    const width = 16;
    expect(fullJustify(input, width)).toEqual([
      "What   must   be",
      "acknowledgment  ",
      "shall be        ",
    ]);
  });
});
