const removeSnow = require("./challenge16");

describe("Challenge 16 Tests", () => {
  const TEST_CASES = [
    {
      input: "abbaca",
      output: "ca"
    },
    {
      input: "azxxzy",
      output: "ay"
    },
    {
      input: "aabccba",
      output: "a"
    },
    {
      input: "aaabbaacc",
      output: "a"
    },
    {
      input: "xyzzy",
      output: "x"
    },
    {
      input: "abbacddce",
      output: "e"
    },
    {
      input: "",
      output: ""
    },
    {
      input: "a",
      output: "a"
    },
    {
      input: "aa",
      output: ""
    },
    {
      input: "ab",
      output: "ab"
    },
    {
      input: "abc",
      output: "abc"
    },
  ];

  it("Should return a string", () => {
    expect(typeof removeSnow(TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(removeSnow(input)).toEqual(output);
  });
});