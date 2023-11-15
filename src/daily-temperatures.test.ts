import { dailyTemperatures } from "./daily-temperatures";

describe("dailyTemperatures", () => {
  test("test-1", () => {
    const input = [73, 74, 75, 71, 69, 72, 76, 73];
    const output = [1, 1, 4, 2, 1, 1, 0, 0];
    expect(dailyTemperatures(input)).toEqual(output);
  });
});
