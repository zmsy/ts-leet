import { encode, decode } from "./encode-and-decode-strings";

describe("encodeAndDecodeStrings", () => {
  test("test-1", () => {
    const input = ["Hello", "World"];
    expect(decode(encode(input))).toEqual(input);
  });

  test("test-2", () => {
    const input = [""];
    expect(decode(encode(input))).toEqual(input);
  });
});
