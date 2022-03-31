/**
 * Given a string s containing just the characters
 * '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *   - Open brackets must be closed by the same type of brackets.
 *   - Open brackets must be closed in the correct order.
 */

export function isValid(s: string): boolean {
  if (s.length === 0) {
    return true;
  }

  const closes: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const opens = new Set(Object.values(closes));
  const stack: Array<string> = [];

  for (const i of s) {
    // opening paren
    if (opens.has(i)) {
      stack.push(i);
    } else if (i in closes) {
      const match = stack.pop();
      if (!match) {
        // there was nothing on the stack.
        return false;
      } else if (match !== closes[i]) {
        // the match wasn't the corresponding open.
        return false;
      }
    }
  }

  // stack should've been depleted by the end.
  return stack.length > 0 ? false : true;
}
