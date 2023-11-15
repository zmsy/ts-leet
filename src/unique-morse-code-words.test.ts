import { uniqueMorseRepresentations } from "./unique-morse-code-words";

describe("uniqueMorseRepresentations", () => {
  test("test-1", () => {
    const input = ["gin", "zen", "gig", "msg"];
    expect(uniqueMorseRepresentations(input)).toBe(2);
  });

  test("test-2", () => {
    expect(uniqueMorseRepresentations(["a"])).toBe(1);
  });
});
