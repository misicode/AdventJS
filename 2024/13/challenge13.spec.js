const isRobotBack = require("./challenge13");

describe("Challenge 13 Tests", () => {
  const TEST_CASES = [
    {
      input: "R",
      output: [1, 0]
    },
    {
      input: "RL",
      output: true
    },
    {
      input: "RLUD",
      output: true
    },
    {
      input: "*RU",
      output: [2, 1]
    },
    {
      input: "R*U",
      output: [1, 2]
    },
    {
      input: "LLL!R",
      output: [-4, 0]
    },
    {
      input: "R?R",
      output: [1, 0]
    },
    {
      input: "U?D",
      output: true
    },
    {
      input: "R!L",
      output: [2, 0]
    },
    {
      input: "U!D",
      output: [0, 2]
    },
    {
      input: "R?L",
      output: true
    },
    {
      input: "U?U",
      output: [0, 1]
    },
  ];

  it("Should return a boolean", () => {
    expect(typeof isRobotBack(TEST_CASES[1].input)).toBe(typeof true);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(isRobotBack(input)).toEqual(output);
  });
});