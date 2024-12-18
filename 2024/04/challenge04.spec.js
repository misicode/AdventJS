const createXmasTree = require("./challenge04");

describe("Challenge 04 Tests", () => {
  const TEST_CASES = [
    {
      input: [3, "*"],
      output: "__*__\n" +
              "_***_\n" +
              "*****\n" +
              "__#__\n" +
              "__#__"
    },
    {
      input: [5, "+"],
      output: "____+____\n" +
              "___+++___\n" +
              "__+++++__\n" +
              "_+++++++_\n" +
              "+++++++++\n" +
              "____#____\n" +
              "____#____"
    },
    {
      input: [6, "@"],
      output: "_____@_____\n" +
              "____@@@____\n" +
              "___@@@@@___\n" +
              "__@@@@@@@__\n" +
              "_@@@@@@@@@_\n" +
              "@@@@@@@@@@@\n" +
              "_____#_____\n" +
              "_____#_____"
    },
    {
      input: [1, "*"],
      output: "*\n" +
              "#\n" +
              "#"
    },
    {
      input: [4, "#"],
      output: "___#___\n" +
              "__###__\n" +
              "_#####_\n" +
              "#######\n" +
              "___#___\n" +
              "___#___"
    },
  ];

  it("Should return a string", () => {
    expect(typeof createXmasTree(...TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(createXmasTree(...input)).toEqual(output);
  });
});