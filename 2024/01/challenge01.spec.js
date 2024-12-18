const prepareGifts = require("./challenge01");

describe("Challenge 01 Tests", () => {
  const TEST_CASES = [
    {
      input: [3, 1, 2, 3, 4, 2, 5],
      output: [1, 2, 3, 4, 5]
    },
    {
      input: [5, 5, 5, 5],
      output: [5]
    },
    {
      input: [1, 2, 3],
      output: [1, 2, 3]
    },
    {
      input: [],
      output: []
    },
    {
      input: [10, 20, 10, 30, 20, 30, 40],
      output: [10, 20, 30, 40]
    },
    {
      input: [3, 1, 2, 3, 1, 2],
      output: [1, 2, 3]
    },
  ];

  it("Should return an array", () => {
    expect(typeof prepareGifts(TEST_CASES[0].input)).toBe(typeof []);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(prepareGifts(input)).toEqual(output);
  });
});