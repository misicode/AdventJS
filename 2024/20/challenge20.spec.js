const fixGiftList = require("./challenge20");

describe("Challenge 20 Tests", () => {
  const TEST_CASES = [
    {
      input: [["puzzle", "car"], ["puzzle", "car", "ball"]],
      output: {
        "missing": {
          "ball": 1
        },
        "extra": {}
      }
    },
    {
      input: [["car", "puzzle", "car"], ["puzzle", "car", "doll"]],
      output: {
        "missing": {
          "doll": 1
        },
        "extra": {
          "car": 1
        }
      }
    },
    {
      input: [["train", "book", "kite"], ["train", "kite", "book", "kite"]],
      output: {
        "missing": {
          "kite": 1
        },
        "extra": {}
      }
    },
    {
      input: [["bear", "car"], ["bear", "car", "car"]],
      output: {
        "missing": {
          "car": 1
        },
        "extra": {}
      }
    },
    {
      input: [[], ["bear", "car", "car"]],
      output: {
        "missing": {
          "car": 2,
          "bear": 1
        },
        "extra": {}
      }
    },
    {
      input: [["puzzle", "puzzle", "car"], ["puzzle", "car"]],
      output: {
        "missing": {},
        "extra": {
          "puzzle": 1
        }
      }
    },
    {
      input: [["car"], ["car", "puzzle", "ball"]],
      output: {
        "missing": {
          "puzzle": 1,
          "ball": 1
        },
        "extra": {}
      }
    },
    {
      input: [["bear", "bear", "car"], ["bear", "bear", "car"]],
      output: {
        "missing": {},
        "extra": {}
      }
    },
  ];

  it("Should return an object", () => {
    expect(typeof fixGiftList(...TEST_CASES[0].input)).toBe(typeof {});
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(fixGiftList(...input)).toEqual(output);
  });
});