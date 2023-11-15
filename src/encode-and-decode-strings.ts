const getCode = (s: string) => s.charCodeAt(0);
const getChar = (n: number) => String.fromCharCode(n);

/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
  const output: string[] = [];
  for (const str of strs) {
    if (str.length > 0) {
      output.push([...str].map((s) => getCode(s)).join(","));
    } else {
      output.push("");
    }
  }

  return output.join("|");
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
  const strs = s.split("|");
  return strs.map((str) => {
    const split = str.split(",");
    return [...split]
      .map((x) => {
        const int = parseInt(x);
        return Number.isFinite(int) ? getChar(int) : "";
      })
      .join("");
  });
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

export { encode, decode };
