const findMissingNumbers = require("./challenge23");

describe("Challenge 23 Tests", () => {
  const TEST_CASES = [
    {
      input: [1, 2, 4, 6],
      output: [3, 5]
    },
    {
      input: [4, 8, 7, 2],
      output: [1, 3, 5, 6]
    },
    {
      input: [3, 2, 1, 1],
      output: []
    },
    {
      input: [5, 5, 5, 3, 3, 2, 1],
      output: [4]
    },
    {
      input: [1, 2, 3, 4, 5],
      output: []
    },
  ];

  it("Should return an array", () => {
    expect(typeof findMissingNumbers(TEST_CASES[0].input)).toBe(typeof []);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(findMissingNumbers(input)).toEqual(output);
  });
});