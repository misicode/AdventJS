const distributeWeight = require("./challenge19");

describe("Challenge 19 Tests", () => {
  const TEST_CASES = [
    {
      input: 1,
      output: " _ \n" +
              "|_|"
    },
    {
      input: 2,
      output: " ___ \n" +
              "|___|"
    },
    {
      input: 3,
      output: " _ \n" +
              "|_|_\n" +
              "|___|"
    },
    {
      input: 4,
      output: " ___ \n" +
              "|___|\n" +
              "|___|"
    },
    {
      input: 5,
      output: " _____ \n" +
              "|     |\n" +
              "|_____|"
    },
    {
      input: 6,
      output: " _ \n" +
              "|_|___\n" +
              "|     |\n" +
              "|_____|"
    },
    {
      input: 7,
      output: " ___ \n" +
              "|___|_\n" +
              "|     |\n" +
              "|_____|"
    },
    {
      input: 18,
      output: " _ \n" +
              "|_|_\n" +
              "|___|_\n" +
              "|     |\n" +
              "|_____|___\n" +
              "|         |\n" +
              "|_________|"
    },
    {
      input: 121,
      output: " _ \n" +
              "|_|_______\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|\n" +
              "|         |\n" +
              "|_________|"
    },
  ];

  it("Should return a string", () => {
    expect(typeof distributeWeight(TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(distributeWeight(input)).toEqual(output);
  });
});