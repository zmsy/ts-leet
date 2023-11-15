/**
 *
 */
export function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  const misaligned: Array<number> = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      misaligned.push(i);
    }
  }

  if (misaligned.length === 0) {
    return true;
  } else if (misaligned.length === 2) {
    const [i1, i2] = misaligned;
    return s1[i1] == s2[i2] && s2[i1] === s1[i2];
  }

  return false;
}
