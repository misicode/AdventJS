const detectBombs = require("./challenge17");

describe("Challenge 17 Tests", () => {
  const TEST_CASES = [
    {
      input: [
        [true, false, false],
        [false, true, false],
        [false, false, false]
      ],
      output: [
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 1]
      ]
    },
    {
      input: [
        [false, true, false],
        [true, false, true],
        [false, true, false]
      ],
      output: [
        [2, 2, 2],
        [2, 4, 2],
        [2, 2, 2]
      ]
    },
    {
      input: [
        [true, true],
        [true, true],
        [false, false]
      ],
      output: [
        [3, 3],
        [3, 3],
        [2, 2]
      ]
    },
    {
      input: [
        [true, true],
        [true, true]
      ],
      output: [
        [3, 3],
        [3, 3]
      ]
    },
    {
      input: [
        [false, false, false],
        [false, true, false],
        [false, false, false]
      ],
      output: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ]
    },
    {
      input: [
        [true, false],
        [false, false]
      ],
      output: [
        [0, 1],
        [1, 1]
      ]
    },
  ];

  it("Should return an array", () => {
    expect(typeof detectBombs(TEST_CASES[0].input)).toBe(typeof []);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(detectBombs(input)).toEqual(output);
  });
});