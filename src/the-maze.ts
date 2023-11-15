/**
 * There is a ball in a maze with empty spaces (represented as 0) and walls
 * (represented as 1). The ball can go through the empty spaces by rolling up,
 * down, left or right, but it won't stop rolling until hitting a wall. When the
 * ball stops, it could choose the next direction.
 *
 * Given the m x n maze, the ball's start position and the destination, where
 * start = [startrow, startcol] and destination =
 * [destinationrow, destinationcol], return true if the ball can stop at the
 * destination, otherwise return false.
 *
 * You may assume that the borders of the maze are all walls (see examples).
 */
export function hasPath(
  maze: number[][],
  start: number[],
  destination: number[]
): boolean {
  const directions: Array<[number, number]> = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  const inBounds = (a: number, b: number): boolean =>
    a >= 0 && a < m && b >= 0 && b < n;

  const m = maze.length;
  const n = maze[0].length;

  // The queue holds *end points*, aka places the ball can roll to without
  // stopping. For each neighbor, you roll as far in that direction as possible.
  const queue: Array<[number, number]> = [[start[0], start[1]]];
  const visited = new Set<string>();
  const coordStr = (a: number, b: number) => `${a}.${b}`;
  while (queue.length > 0) {
    const [cX, cY] = queue.shift()!;
    visited.add(coordStr(cX, cY));

    // check for victory, did we land in the right location?
    if (cX === destination[0] && cY === destination[1]) {
      return true;
    }

    // roll in each direction as far as possible.
    for (const [plusX, plusY] of directions) {
      let dX = cX;
      let dY = cY;
      while (inBounds(dX, dY) && maze[dX][dY] !== 1) {
        dX += plusX;
        dY += plusY;
      }
      // move back one space once we've hit an endpoint.
      dX -= plusX;
      dY -= plusY;
      if (!visited.has(coordStr(dX, dY))) {
        queue.push([dX, dY]);
      }
    }
  }

  return false;
}
