import { intervalIntersection } from "./interval-list-intersections";

describe("intervalIntersection", () => {
  test("test-1", () => {
    const one = [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ];
    const two = [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ];
    expect(intervalIntersection(one, two)).toEqual([
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ]);
  });

  test("test-2", () => {
    expect(
      intervalIntersection(
        [
          [1, 3],
          [5, 9],
        ],
        []
      )
    ).toHaveLength(0);
  });

  test("test-3", () => {
    expect(
      intervalIntersection(
        [
          [4, 7],
          [8, 14],
        ],
        [[3, 4]]
      )
    ).toEqual([[4, 4]]);
  });

  test("test-4", () => {
    expect(
      intervalIntersection(
        [
          [0, 5],
          [12, 14],
          [15, 18],
        ],
        [
          [11, 15],
          [18, 19],
        ]
      )
    ).toEqual([
      [12, 14],
      [15, 15],
      [18, 18],
    ]);
  });
});
