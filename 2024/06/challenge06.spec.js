const inBox = require("./challenge06");

describe("Challenge 06 Tests", () => {
  const TEST_CASES = [
    {
      input: [
        "###",
        "#*#",
        "###"
      ],
      output: true
    },
    {
      input: [
        "#*#",
        "###",
        "###"
      ],
      output: false
    },
    {
      input: [
        "###",
        "# #",
        "###"
      ],
      output: false
    },
    {
      input: [
        "####",
        "#* #",
        "#  #",
        "####"
      ],
      output: true
    },
    {
      input: [
        "#####",
        "#   #",
        "#  #*",
        "####"
      ],
      output: false
    },
    {
      input: [
        "#####",
        "#   #",
        "#   #",
        "#   #",
        "#####"
      ],
      output: false
    },
    {
      input: [
        "#####",
        "#   #",
        "#   #",
        "*#  #",
        "#####"
      ],
      output: false
    },
    {
      input: [
        "##*##",
        "#   #",
        "#   #",
        "#   #",
        "#####"
      ],
      output: false
    },
    {
      input: [
        "####",
        "#  #",
        "##*#"
      ],
      output: false
    },
    {
      input: [
        "###",
        "###",
        "#*#"
      ],
      output: false
    },
  ];

  it("Should return a boolean", () => {
    expect(typeof inBox(TEST_CASES[0].input)).toBe(typeof true);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(inBox(input)).toEqual(output);
  });
});