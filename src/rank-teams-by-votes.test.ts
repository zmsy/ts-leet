import { rankTeams } from "./rank-teams-by-votes";

describe("rankTeams", () => {
  test("test-1", () => {
    const input = ["ABC", "ACB", "ABC", "ACB", "ACB"];
    expect(rankTeams(input)).toBe("ACB");
  });

  test("test-2", () => {
    const input = ["WXYZ", "XYZW"];
    expect(rankTeams(input)).toBe("XWYZ");
  });

  test("test-3", () => {
    const input = ["ZMNAGUEDSJYLBOPHRQICWFXTVK"];
    expect(rankTeams(input)).toBe("ZMNAGUEDSJYLBOPHRQICWFXTVK");
  });
});
