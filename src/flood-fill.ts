/**
 * An image is represented by an m x n integer grid image where image[i][j]
 * represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and color. You should perform a
 * flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color as the
 * starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color), and so on. Replace the color of all of the
 * aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 *
 * Notes: Basic DFS.
 */
export function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image.length === 0 || image[0].length === 0) {
    return image;
  }

  const m = image.length;
  const n = image[0].length;
  const getNeighbors = (i: number, j: number): Array<[number, number]> => {
    const neighbs: Array<[number, number]> = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];
    return neighbs.filter(([a, b]) => a >= 0 && a < m && b >= 0 && b < n);
  };

  const currentColor = image[sr][sc];
  const queue: Array<[number, number]> = [[sr, sc]];
  const coordStr = (x: number, y: number) => `${x}..${y}`;
  const visited = new Set<string>();
  while (queue.length > 0) {
    const current = queue.shift()!;
    visited.add(coordStr(...current));
    const [x, y] = current; // update current color as needed
    if (image[x][y] === currentColor) {
      image[x][y] = color;
      for (const neighbor of getNeighbors(x, y)) {
        const [nX, nY] = neighbor;
        if (image[nX][nY] === currentColor && !visited.has(coordStr(nX, nY))) {
          queue.push(neighbor);
        }
      }
    }
  }

  return image;
}
