/**
 * Given two strings s and t, return true if they are equal when both are typed
 * into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 */
export function backspaceCompare(s: string, t: string): boolean {
  let sIdx = s.length - 1;
  let tIdx = t.length - 1;

  while (sIdx > 0 && tIdx > 0) {
    // move up S pointer by any number of spaces required due to backspacing.
    if (s[sIdx] === "#") {
      let backspaces = 2;
      while (backspaces > 0) {
        sIdx--;
        if (s[sIdx] === "#") {
          backspaces += 1;
        } else {
          backspaces -= 1;
        }
      }
    }

    // same with T
    if (t[tIdx] === "#") {
      let backspaces = 2;
      while (backspaces > 0) {
        tIdx--;
        if (t[tIdx] === "#") {
          backspaces += 1;
        } else {
          backspaces -= 1;
        }
      }
    }

    if (s[sIdx] !== t[tIdx]) {
      return false;
    }

    sIdx--;
    tIdx--;
  }

  return true;
}
