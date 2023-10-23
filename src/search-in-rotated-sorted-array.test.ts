import { search } from "./search-in-rotated-sorted-array";

describe("search", () => {
  it("[4,5,6,7,0,1,2], 0", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it("[4,5,6,7,0,1,2] -> 3", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it("[1] -> 0", () => {
    expect(search([1], 0)).toBe(-1);
  });
});
