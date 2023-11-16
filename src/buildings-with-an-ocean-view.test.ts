import { findBuildings } from "./buildings-with-an-ocean-view";

describe("findBuildings", () => {
  test("test-1", () => {
    const input = [4, 2, 3, 1];
    const output = [0, 2, 3];
    expect(findBuildings(input)).toEqual(output);
  });

  test("test-2", () => {
    const input = [4, 3, 2, 1];
    const output = [0, 1, 2, 3];
    expect(findBuildings(input)).toEqual(output);
  });

  test("test-3", () => {
    const input = [1, 3, 2, 4];
    const output = [3];
    expect(findBuildings(input)).toEqual(output);
  });
});
