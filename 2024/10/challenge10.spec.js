const compile = require("./challenge10");

describe("Challenge 10 Tests", () => {
  const TEST_CASES = [
    {
      input: [
        "MOV 0 A",
        "INC A"
      ],
      output: 1
    },
    {
      input: [
        "INC A",
        "INC A",
        "DEC A",
        "MOV A B",
      ],
      output: 1
    },
    {
      input: [
        "MOV 5 B",
        "DEC B",
        "MOV B A",
        "INC A"
      ],
      output: 5
    },
    {
      input: [
        "INC C",
        "DEC B",
        "MOV C Y",
        "INC Y",
      ],
      output: undefined
    },
    {
      input: [
        "MOV 2 X",
        "DEC X",
        "DEC X",
        "JMP X 1",
        "MOV X A"
      ],
      output: -2
    },
    {
      input: [
        "MOV 3 C",
        "DEC C",
        "DEC C",
        "DEC C",
        "JMP C 3",
        "MOV C A"
      ],
      output: -1
    },
  ];

  it("Should return a number", () => {
    expect(typeof compile(TEST_CASES[0].input)).toBe(typeof 0);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(compile(input)).toEqual(output);
  });
});