const directions: Record<number, string> = {
  0: "East",
  1: "North",
  2: "West",
  3: "South",
};

type Direction = keyof typeof directions;

/** Where to actually move */
const directionCoords = new Map<Direction, [number, number]>([
  [0, [0, 1]],
  [1, [1, 0]],
  [2, [0, -1]],
  [3, [-1, 0]],
]);

export class Robot {
  private direction: Direction;
  private grid: number[][];
  private position: [number, number];
  private width: number;
  private height: number;
  private perimeter: number;

  constructor(width: number, height: number) {
    this.direction = 0;
    this.grid = Array(height)
      .fill(null)
      .map(() => new Array(width).fill(0));
    this.position = [0, 0];
    this.width = width;
    this.height = height;
    this.perimeter = 2 * (width + height - 2);
  }

  private turn90(): void {
    this.direction = (this.direction + 1) % 4;
  }

  private inbounds(i: number, j: number): boolean {
    return i >= 0 && i < this.height && j >= 0 && j < this.width;
  }

  private getCoords(): [number, number] {
    return directionCoords.get(this.direction)!;
  }

  step(num: number): void {
    num %= this.perimeter;
    if (num === 0) {
      // if we removed the perimeter with a modulo, the next time the robot
      // arrived it should've turned south.
      num = this.perimeter;
    }
    let [i, j] = this.position;
    let [plusI, plusJ] = this.getCoords();
    for (let a = 0; a < num; a++) {
      if (!this.inbounds(i + plusI, j + plusJ)) {
        this.turn90();
        [plusI, plusJ] = this.getCoords();
      }
      i += plusI;
      j += plusJ;
    }
    this.position = [i, j];
  }

  getPos(): number[] {
    // i/j coords are y/x oriented
    const [y, x] = this.position;
    return [x, y];
  }

  getDir(): string {
    return directions[this.direction];
  }
}
