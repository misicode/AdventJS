const minMovesToStables = require("./challenge14");

describe("Challenge 14 Tests", () => {
  const TEST_CASES = [
    {
      input: [[2, 6, 9], [3, 8, 5]],
      output: 3
    },
    {
      input: [[1, 1, 3], [1, 4, 8]],
      output: 8
    },
    {
      input: [[5, 15, 10], [8, 18, 12]],
      output: 8
    },
    {
      input: [[30, 1, 2], [1, 2, 30]],
      output: 0
    },
    {
      input: [[30, 20, 10], [35, 25, 15]],
      output: 15
    },
    {
      input: [[100, 1], [50, 75]],
      output: 74
    },
  ];

  it("Should return a number", () => {
    expect(typeof minMovesToStables(...TEST_CASES[0].input)).toBe(typeof 0);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(minMovesToStables(...input)).toEqual(output);
  });
});