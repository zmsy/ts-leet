import { canFinish } from "./course-schedule";

describe("canFinishCourseSchedule", () => {
  it("test-1", () => {
    const numCourses = 2;
    const prerequisites = [[1, 0]];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  it("test-2", () => {
    const numCourses = 2;
    const prerequisites = [
      [1, 0],
      [0, 1],
    ];
    expect(canFinish(numCourses, prerequisites)).toBe(false);
  });

  it("test-3", () => {
    const numCourses = 2;
    const prerequisites = [[0, 1]];
    expect(canFinish(numCourses, prerequisites)).toBe(true);
  });

  it("test-4", () => {
    const numCourses = 3;
    const prerequisites = [
      [1, 0],
      [1, 2],
      [0, 1],
    ];
    expect(canFinish(numCourses, prerequisites)).toBe(false);
  });
});
