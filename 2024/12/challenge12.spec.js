const calculatePrice = require("./challenge12");

describe("Challenge 12 Tests", () => {
  const TEST_CASES = [
    {
      input: "***",
      output: 3
    },
    {
      input: "*o",
      output: 4
    },
    {
      input: "o*",
      output: 6
    },
    {
      input: "*o@",
      output: 94
    },
    {
      input: "^#",
      output: 40
    },
    {
      input: "#@Z",
      output: undefined
    },
  ];

  it("Should return a number", () => {
    expect(typeof calculatePrice(TEST_CASES[0].input)).toBe(typeof 0);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(calculatePrice(input)).toEqual(output);
  });
});