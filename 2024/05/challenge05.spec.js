const organizeShoes = require("./challenge05");

describe("Challenge 05 Tests", () => {
  const TEST_CASES = [
    {
      input: [
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 42 }
      ],
      output: [38, 42]
    },
    {
      input: [
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "I", size: 38 },
        { type: "I", size: 38 },
        { type: "R", size: 38 }
      ],
      output: [38, 38]
    },
    {
      input: [
        { type: "I", size: 38 },
        { type: "R", size: 36 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 42 }
      ],
      output: [42]
    },
    {
      input: [
        { type: "I", size: 40 },
        { type: "R", size: 40 },
        { type: "I", size: 40 },
        { type: "R", size: 40 }
      ],
      output: [40, 40]
    },
    {
      input: [
        { type: "I", size: 39 },
        { type: "R", size: 39 },
        { type: "R", size: 39 }
      ],
      output: [39]
    },
  ];

  it("Should return an array", () => {
    expect(typeof organizeShoes(TEST_CASES[0].input)).toBe(typeof []);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(organizeShoes(input)).toEqual(output);
  });
});