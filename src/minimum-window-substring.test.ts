import { minWindow } from "./minimum-window-substring";

describe("Minimum Window Substring", () => {
  it("example-1", () => {
    expect(minWindow("ADOBECODEBANC", "ABC")).toEqual("BANC");
  });

  it("example-2", () => {
    expect(minWindow("a", "a")).toEqual("a");
  });

  it("example-3", () => {
    expect(minWindow("a", "aa")).toEqual("");
  });

  it("example-4", () => {
    expect(minWindow("aa", "aa")).toEqual("aa");
  });
});
