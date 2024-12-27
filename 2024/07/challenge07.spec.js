const fixPackages = require("./challenge07");

describe("Challenge 07 Tests", () => {
  const TEST_CASES = [
    {
      input: "a(bc)de",
      output: "acbde"
    },
    {
      input: "a(bc(def)g)h",
      output: "agdefcbh"
    },
    {
      input: "abc(def(gh)i)jk",
      output: "abcighfedjk"
    },
    {
      input: "a(b(c))e",
      output: "acbe"
    },
    {
      input: "a(b(cd(efg)))h",
      output: "acdgfebh"
    },
    {
      input: "(abc(def(ghi)))",
      output: "defihgcba"
    },
  ];

  it("Should return a string", () => {
    expect(typeof fixPackages(TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(fixPackages(input)).toEqual(output);
  });
});