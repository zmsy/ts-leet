import { exist } from "./word-search";

describe("Word Search", () => {
  it("example-1", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCCED";
    expect(exist(board, word)).toEqual(true);
  });

  it("example-2", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "SEE";
    expect(exist(board, word)).toEqual(true);
  });

  it("example-3", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCB";
    expect(exist(board, word)).toEqual(false);
  });
});
