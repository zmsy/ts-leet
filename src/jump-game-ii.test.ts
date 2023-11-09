import { jump } from "./jump-game-ii";

describe("jumpGame2", () => {
  test("test-1", () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  });

  test("test-2", () => {
    expect(jump([2, 3, 0, 1, 4])).toBe(2);
  });
});
