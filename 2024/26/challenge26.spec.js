const getCompleted = require("./challenge26");

describe("Challenge 26 Tests", () => {
  const TEST_CASES = [
    {
      input: ["01:00:00", "03:00:00"],
      output: "33%"
    },
    {
      input: ["02:00:00", "04:00:00"],
      output: "50%"
    },
    {
      input: ["01:00:00", "01:00:00"],
      output: "100%"
    },
    {
      input: ["00:10:00", "01:00:00"],
      output: "17%"
    },
    {
      input: ["01:10:10", "03:30:30"],
      output: "33%"
    },
    {
      input: ["03:30:30", "05:50:50"],
      output: "60%"
    },
    {
      input: ["00:00:00", "01:00:00"],
      output: "0%"
    },
    {
      input: ["00:00:01", "00:00:02"],
      output: "50%"
    },
    {
      input: ["23:59:59", "24:00:00"],
      output: "100%"
    },
  ];

  it("Should return a string", () => {
    expect(typeof getCompleted(...TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(getCompleted(...input)).toEqual(output);
  });
});