/**
 * Return the values of a matrix in spiral order.
 *
 * Create a 0, max pointer for both width and height.
 * Whenever you hit a corner, pivot 90 degrees and
 * decrement the pointer of the corresponding side.
 */
type Direction = [number, number];
const DirectionRight: Direction = [0, 1]; // remove width
const DirectionLeft: Direction = [0, -1]; // remove width
const DirectionDown: Direction = [1, 0]; // add depth
const DirectionUp: Direction = [-1, 0]; // remove depth

export function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return [];

  // these pointers are the bounds of the matrix. as the coords
  // change and move through the matrix, this is what changes.
  let heightTop = 0;
  let heightBottom = matrix.length;
  let widthLeft = 0;
  let widthRight = matrix[0].length;

  let coords: [number, number] = [0, 0];
  let dir: Direction = DirectionRight; // start moving right.
  const output: Array<number> = [];

  while (heightTop < heightBottom && widthLeft < widthRight) {
    // append the current node.
    output.push(matrix[coords[0]][coords[1]]);

    // check for out-of-bounds and update the bounds pointers.
    if (coords[1] === widthRight - 1 && dir === DirectionRight) {
      dir = DirectionDown;
      heightTop += 1;
    } else if (coords[0] === heightBottom - 1 && dir === DirectionDown) {
      dir = DirectionLeft;
      widthRight -= 1;
    } else if (coords[1] === widthLeft && dir === DirectionLeft) {
      dir = DirectionUp;
      heightBottom -= 1;
    } else if (coords[0] === heightTop && dir === DirectionUp) {
      dir = DirectionRight;
      widthLeft += 1;
    }

    // increment based on the direction.
    coords = [coords[0] + dir[0], coords[1] + dir[1]];
  }

  return output;
}
