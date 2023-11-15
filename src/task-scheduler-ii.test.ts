import { taskSchedulerII } from "./task-scheduler-ii";

describe("taskSchedulerII", () => {
  test("test-1", () => {
    expect(taskSchedulerII([1, 2, 1, 2, 3, 1], 3)).toBe(9);
  });

  test("test-2", () => {
    expect(taskSchedulerII([5, 8, 8, 5], 2)).toBe(6);
  });

  test("test-3", () => {
    expect(taskSchedulerII([4, 10, 10, 9, 10, 4, 10, 4], 8)).toBe(30);
  });
});
