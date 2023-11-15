import { Robot } from "./walking-robot-simulation-ii";

describe("Robot", () => {
  test("test-1", () => {
    const robot = new Robot(6, 3);
    robot.step(2);
    robot.step(2);
    expect(robot.getPos()).toEqual([4, 0]);
    expect(robot.getDir()).toEqual("East");
    robot.step(2);
    robot.step(1);
    robot.step(4);
    expect(robot.getPos()).toEqual([1, 2]);
    expect(robot.getDir()).toEqual("West");
  });

  test("test-2", () => {
    const robot = new Robot(2, 3);
    expect(robot.getPos()).toEqual([0, 0]);
    expect(robot.getDir()).toEqual("East");
    robot.step(24);
    expect(robot.getPos()).toEqual([0, 0]);
    expect(robot.getDir()).toEqual("South");
  });
});
