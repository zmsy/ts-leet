/**
 * Given an array of strings words and a width maxWidth, format the text such
 * that each line has exactly maxWidth characters and is fully (left and right)
 * justified.
 *
 * You should pack your words in a greedy approach; that is, pack as many words
 * as you can in each line. Pad extra spaces ' ' when necessary so that each
 * line has exactly maxWidth characters.
 *
 * Extra spaces between words should be distributed as evenly as possible. If
 * the number of spaces on a line does not divide evenly between words, the
 * empty slots on the left will be assigned more spaces than the slots on the
 * right.
 *
 * For the last line of text, it should be left-justified, and no extra space
 * is inserted between words.
 * @param words
 * @param maxWidth
 */
export function fullJustify(words: string[], maxWidth: number): string[] {
  const lines: string[][] = [];
  let lineWidth = 0; // current line width
  const currentLine = [];
  for (const word of words) {
    const len = word.length;
    // there's nothing on this line yet.
    if (lineWidth === 0) {
      currentLine.push(word);
      lineWidth += len;
    }
    // there's space left: account for the space in-between these two.
    else if (lineWidth + 1 + len <= maxWidth) {
      currentLine.push(word);
      lineWidth += 1 + len;
    }
    // there's no space left on this line, move to the next.
    else {
      lines.push([...currentLine]);
      currentLine.length = 0;
      lineWidth = 0;

      // then add this to a new line
      currentLine.push(word);
      lineWidth += len;
    }
  }
  if (currentLine.length > 0) {
    lines.push([...currentLine]);
  }

  const output: string[] = [];
  lines.forEach((line, idx) => {
    // left justify
    if (idx === lines.length - 1) {
      let joined = line.join(" ");
      const spaces = maxWidth - joined.length;
      joined += " ".repeat(spaces);
      output.push(joined);
    } else if (line.length === 1) {
      const spaces = maxWidth - line[0].length;
      output.push(line[0] + " ".repeat(spaces));
    }
    // full justify
    else {
      const lineLen = line.length;
      const joinedLen = line.join("").length;
      const spaces = maxWidth - joinedLen;
      const gaps = lineLen - 1;
      const perWord = Math.floor(spaces / gaps);
      let extras = spaces % gaps;
      let joined = line[0];
      for (let i = 1; i < lineLen; i++) {
        joined += " ".repeat(perWord);
        if (extras > 0) {
          joined += " ";
          extras -= 1;
        }
        joined += line[i];
      }
      output.push(joined);
    }
  });

  return output;
}
