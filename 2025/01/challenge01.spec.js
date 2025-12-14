const filterGifts = require("./challenge01");

describe("AdventJS 2025 - Challenge 01 Tests", () => {
  const TEST_CASES = [
    {
      input: ["car", "doll#arm", "ball", "#train"],
      output: ["car", "ball"]
    },
    {
      input: ["#broken", "#rusty"],
      output: []
    },
    {
      input: [],
      output: []
    },
    {
      input: ["game", "poster", "sticker#bad", "console"],
      output: ["game", "poster", "console"]
    },
    {
      input: ["#bad", "car", "#oops", "ball"],
      output: ["car", "ball"]
    },
  ];

  it("Should return an array", () => {
    expect(typeof filterGifts(TEST_CASES[0].input)).toBe(typeof []);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(filterGifts(input)).toEqual(output);
  });
});