const treeHeight = require("./challenge21");

describe("Challenge 21 Tests", () => {
  const TEST_CASES = [
    {
      input: {
        value: '🎁',
        left: null,
        right: null
      },
      output: 1
    },
    {
      input: {
        value: '🎁',
        left: {
          value: '🎄',
          left: null,
          right: null
        },
        right: {
          value: '❄️',
          left: null,
          right: null
        }
      },
      output: 2
    },
    {
      input: {
        value: '🎁',
        left: {
          value: '🎄',
          left: {
            value: '⭐',
            left: null,
            right: null
          },
          right: null
        },
        right: {
          value: '❄️',
          left: null,
          right: null
        }
      },
      output: 3
    },
    {
      input: null,
      output: 0
    },
    {
      input: {
        value: '🎁',
        left: {
          value: '🎄',
          left: {
            value: '⭐',
            left: {
              value: '🎅',
              left: null,
              right: null
            },
            right: null
          },
          right: null
        },
        right: null
      },
      output: 4
    },
  ];

  it("Should return a number", () => {
    expect(typeof treeHeight(TEST_CASES[0].input)).toBe(typeof 0);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(treeHeight(input)).toEqual(output);
  });
});