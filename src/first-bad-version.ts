var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let lo = 1;
    let hi = n;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (isBadVersion(mid)) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return hi;
  };
};
