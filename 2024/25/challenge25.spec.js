const execute = require("./challenge25");

describe("Challenge 25 Tests", () => {
  const TEST_CASES = [
    {
      input: `+++`,
      output: 3
    },
    {
      input: `+--`,
      output: -1
    },
    {
      input: `>+++[-]`,
      output: 0
    },
    {
      input: `>>>+{++}`,
      output: 3
    },
    {
      input: `+{[-]+}`,
      output: 1
    },
    {
      input: `-[+>]++`,
      output: 2
    },
    {
      input: `-[+{++}]++{[-]}++`,
      output: 2
    },
    {
      input: `{+}{+}{+}`,
      output: 0
    },
    {
      input: ``,
      output: 0
    },
    {
      input: `+++{[-]+++[-]+}`,
      output: 1
    },
    {
      input: `{>++>++}`,
      output: 0
    },
    {
      input: `++++[-->]>++`,
      output: 2
    },
  ];

  it("Should return a number", () => {
    expect(typeof execute(TEST_CASES[0].input)).toBe(typeof 0);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(execute(input)).toEqual(output);
  });
});