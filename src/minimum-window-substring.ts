export function minWindow(s: string, t: string): string {
  if (s.length < t.length) {
    return "";
  }

  // keep track of where characters were last seen.
  const tCount = new Map<string, number>();
  t.split("").forEach((char) => {
    tCount.set(char, (tCount.get(char) ?? 0) + 1);
  });
  const window = new Map<string, number>();

  let have = 0; // unique characters we have the totality of
  const need = tCount.size; // unique characters we need
  let i = 0;
  let j = 0;
  let best = "";
  let bestLen = Infinity;
  while (j < s.length) {
    const letter = s[j];
    window.set(letter, (window.get(letter) ?? 0) + 1);

    // check to see how many of the letters we've accumulated the full amount
    // for so far.
    if (tCount.has(letter) && window.get(letter)! === tCount.get(letter)!) {
      have += 1;
    }

    while (have === need) {
      // check for victory condition and update the best we've seen so far if
      // necessary
      const newLen = j - i + 1;
      if (newLen <= bestLen) {
        best = s.slice(i, j + 1);
        bestLen = newLen;
      }

      // move up the back pointer as needed.
      const backChar = s[i];
      window.set(backChar, (window.get(backChar) ?? 0) - 1);
      if (
        tCount.has(backChar) &&
        window.get(backChar)! < tCount.get(backChar)!
      ) {
        have -= 1;
      }
      i++;
    }

    j++;
  }

  return Number.isFinite(bestLen) ? best : "";
}
