const manufactureGifts = require("./challenge02");

describe("AdventJS 2025 - Challenge 02 Tests", () => {
  const TEST_CASES = [
    {
      input: [
        { toy: "car", quantity: 3 },
        { toy: "doll", quantity: 1 },
        { toy: "ball", quantity: 2 }
      ],
      output: ["car", "car", "car", "doll", "ball", "ball"]
    },
    {
      input: [
        { toy: "train", quantity: 0 },
        { toy: "bear", quantity: -2 },
        { toy: "puzzle", quantity: 1 }
      ],
      output: ["puzzle"]
    },
    {
      input: [],
      output: []
    },
    {
      input: [
        { toy: "car", quantity: 1 },
        { toy: "doll", quantity: 2 },
        { toy: "ball", quantity: 0 },
        { toy: "car", quantity: 3 }
      ],
      output: ["car", "doll", "doll", "car", "car", "car"]
    },
    {
      input: [
        { toy: "robot", quantity: 2 },
        { toy: "drone", quantity: -3 },
        { toy: "ball", quantity: 1 }
      ],
      output: ["robot", "robot", "ball"]
    },
  ];

  it("Should return an array", () => {
    expect(typeof manufactureGifts(TEST_CASES[0].input)).toBe(typeof []);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(manufactureGifts(input)).toEqual(output);
  });
});