/**
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * NOTES: In order to be able to do this correctly, you need to 1. track open +
 * close separately, 2. conditionally add closed parens and 3. make sure to
 * recurse into both options.
 */
export function generateParenthesis(n: number): string[] {
  if (n === 0) {
    return [];
  }
  const outputs: Array<string> = [];
  const generator = (parens: string, opens: number, closes: number): void => {
    if (opens === 0 && closes === 0) {
      outputs.push(parens);
      return;
    }

    if (opens < closes) {
      generator(parens + ")", opens, closes - 1);
    }

    if (opens > 0) {
      generator(parens + "(", opens - 1, closes);
    }
  };

  generator("", n, n);

  return outputs;
}
