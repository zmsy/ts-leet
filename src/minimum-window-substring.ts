type CharMap = Record<string, number>;

export function minWindow(s: string, t: string): string {
  if (s.length < t.length) {
    return "";
  }
  let best = "";

  // keep track of where characters were last seen.
  const tLetterCounts: CharMap = t.split("").reduce((acc, cur) => {
    acc[cur] ??= 0;
    acc[cur] += 1;
    return acc;
  }, {} as CharMap);
  const sLetterCounts: CharMap = {};

  let i = 0;
  let j = 0;
  while (j < s.length) {
    const letter = s[j];
    sLetterCounts[letter] = (sLetterCounts[letter] ?? 0) + 1;

    // can only find 'best' if the whole t word is accounted for
    if (hasT(tLetterCounts, sLetterCounts)) {
      // if we've got an excess of the new letter we found, then move up the
      // back pointer to the place where the next 't' letter is.
      const tCount = tLetterCounts[letter];
      let sCount = sLetterCounts[letter];
      if (sCount !== undefined && tCount !== undefined && sCount > tCount) {
        i++;
        sLetterCounts[letter] -= 1;

        // scooch up the back until we find another t letter.
        while (tLetterCounts[s[i]] === undefined) {
          i++;
        }
      }

      // check for victory condition
      const sliced = s.slice(i, j + 1);
      if (best === "" || sliced.length < best.length) {
        best = sliced;
      }
    }

    j++;
  }

  return best;
}

// Check that every value in the second map is in the first
function hasT(a: CharMap, b: CharMap): boolean {
  for (const key of Object.keys(a)) {
    if (b[key] === undefined || b[key] < a[key]) {
      return false;
    }
  }

  return true;
}
