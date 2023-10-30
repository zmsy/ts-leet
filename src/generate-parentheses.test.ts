import { generateParenthesis } from "./generate-parentheses";

describe("Generate Parentheses", () => {
  test("test-1", () => {
    const n = 3;
    const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
    const result = generateParenthesis(n);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  test("test-2", () => {
    const n = 1;
    const expected = ["()"];
    const result = generateParenthesis(n);
    expect(result).toEqual(expected);
  });
});
