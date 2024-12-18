const createFrame = require("./challenge02");

describe("Challenge 02 Tests", () => {
  const TEST_CASES = [
    {
      input: ["midu"],
      output: "********\n" +
              "* midu *\n" +
              "********"
    },
    {
      input: ["midu", "madeval", "educalvolpz"],
      output: "***************\n" +
              "* midu        *\n" +
              "* madeval     *\n" +
              "* educalvolpz *\n" +
              "***************"
    },
    {
      input: ["a", "bb", "ccc"],
      output: "*******\n" +
              "* a   *\n" +
              "* bb  *\n" +
              "* ccc *\n" +
              "*******"
    },
    {
      input: ["a", "bb", "ccc", "dddd"],
      output: "********\n" +
              "* a    *\n" +
              "* bb   *\n" +
              "* ccc  *\n" +
              "* dddd *\n" +
              "********"
    },
    {
      input: ["midu", "madeval", "educalvolpz", "midu"],
      output: "***************\n" +
              "* midu        *\n" +
              "* madeval     *\n" +
              "* educalvolpz *\n" +
              "* midu        *\n" +
              "***************"
    },
  ];

  it("Should return a string", () => {
    expect(typeof createFrame(TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(createFrame(input)).toEqual(output);
  });
});