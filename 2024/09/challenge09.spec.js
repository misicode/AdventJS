const moveTrain = require("./challenge09");

describe("Challenge 09 Tests", () => {
  const TEST_CASES = [
    {
      input: [[
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
      ], "U"],
      output: "eat"
    },
    {
      input: [[
        "·····",
        "··*··",
        "··.··",
        "··o··",
        "··@··"
      ], "D"],
      output: "crash"
    },
    {
      input: [[
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
      ], "D"],
      output: "crash"
    },
    {
      input: [[
        "·····",
        "··*··",
        "··@··",
        "··o··",
        "··o··"
      ], "R"],
      output: "none"
    },
    {
      input: [[
        "··@··",
        "··o··",
        "·*o··",
        "··o··",
        "··o··"
      ], "U"],
      output: "crash"
    },
    {
      input: [[
        "··@··",
        "··o··",
        "·*o··",
        "··o··",
        "··o··"
      ], "L"],
      output: "none"
    },
    {
      input: [[
        "·····",
        "··@··",
        "··*··",
        "·····",
        "·····"
      ], "D"],
      output: "eat"
    },
  ];

  it("Should return a string", () => {
    expect(typeof moveTrain(...TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(moveTrain(...input)).toEqual(output);
  });
});