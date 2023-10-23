import { longestPalindrome } from "./longest-palindromic-substring";
describe("longestPalindromicSubstring", () => {
  it("a", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  it("bb", () => {
    expect(longestPalindrome("bb")).toBe("bb");
  });

  it("", () => {
    expect(longestPalindrome("")).toBe("");
  });

  it("babad", () => {
    expect(longestPalindrome("babad")).toBe("bab");
  });

  it("cbbd", () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  });
});
