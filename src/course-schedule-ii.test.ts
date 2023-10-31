import { findOrder } from "./course-schedule-ii";

describe("findOrder", () => {
  test("test-1", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];
    const output = [0, 1]; // Expected output
    expect(findOrder(numCourses, prerequisites)).toEqual(
      expect.arrayContaining(output)
    );
  });

  test("test-2", () => {
    const numCourses = 4;
    const prerequisites = [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ];
    const output = [0, 2, 1, 3]; // Expected output
    expect(findOrder(numCourses, prerequisites)).toEqual(
      expect.arrayContaining(output)
    );
  });

  test("test-3", () => {
    const numCourses = 1;
    const prerequisites: number[][] = [];
    const output = [0]; // Expected output
    expect(findOrder(numCourses, prerequisites)).toEqual(
      expect.arrayContaining(output)
    );
  });

  test("test-4", () => {
    const numCourses = 3;
    const prerequisites = [
      [1, 0],
      [1, 2],
      [0, 1],
    ];
    expect(findOrder(numCourses, prerequisites)).toEqual([]);
  });
});
