const drawRace = require("./challenge08");

describe("Challenge 08 Tests", () => {
  const TEST_CASES = [
    {
      input: [[0, 5, -3], 10],
      output: "  ~~~~~~~~~~ /1\n" +
              " ~~~~~r~~~~ /2\n" +
              "~~~~~~~r~~ /3"
    },
    {
      input: [[2, -1, 0, 5], 8],
      output: "   ~~r~~~~~ /1\n" +
              "  ~~~~~~~r /2\n" +
              " ~~~~~~~~ /3\n" +
              "~~~~~r~~ /4"
    },
    {
      input: [[3, 7, -2], 12],
      output: "  ~~~r~~~~~~~~ /1\n" +
              " ~~~~~~~r~~~~ /2\n" +
              "~~~~~~~~~~r~ /3"
    },
    {
      input: [[0, 0, 0], 6],
      output: "  ~~~~~~ /1\n" +
              " ~~~~~~ /2\n" +
              "~~~~~~ /3"
    },
    {
      input: [[5, 3, -4], 9],
      output: "  ~~~~~r~~~ /1\n" +
              " ~~~r~~~~~ /2\n" +
              "~~~~~r~~~ /3"
    },
  ];

  it("Should return a string", () => {
    expect(typeof drawRace(...TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(drawRace(...input)).toEqual(output);
  });
});