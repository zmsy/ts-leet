import { numIslands } from "./number-of-islands";

describe("numIslands", () => {
  it("1 island", () => {
    const grid1 = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid1)).toEqual(1);
  });

  it("3 islands", () => {
    const grid2 = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid2)).toEqual(3);
  });

  it("should handle empty grids correctly", () => {
    const emptyGrid: string[][] = [];
    expect(numIslands(emptyGrid)).toEqual(0);

    const emptyRow: string[][] = [[]];
    expect(numIslands(emptyRow)).toEqual(0);
  });
});
