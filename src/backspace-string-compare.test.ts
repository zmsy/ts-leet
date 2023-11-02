import { backspaceCompare } from "./backspace-string-compare";

describe("backspaceCompare", () => {
  test("test-1", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
  });

  test("test-2", () => {
    expect(backspaceCompare("ab##", "c#d#")).toBe(true);
  });
});
