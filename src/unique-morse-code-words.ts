export function uniqueMorseRepresentations(words: string[]): number {
  const getCode = (s: string) => s.charCodeAt(0) - 97;
  const morseCodes = [
    // vals 0-26
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const codeSet = new Set<string>();
  for (const word of words) {
    let str = "";
    for (const char of word) {
      str += morseCodes[getCode(char)] ?? "";
    }
    codeSet.add(str);
  }

  return codeSet.size;
}
