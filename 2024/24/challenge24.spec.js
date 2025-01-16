const isTreesSynchronized = require("./challenge24");

describe("Challenge 24 Tests", () => {
  const TEST_CASES = [
    {
      input: [
        { value: "🎄" },
        { value: "🎄" }
      ],
      output: [true, "🎄"]
    },
    {
      input: [
        { value: "🎄", left: { value: "⭐" }, right: { value: "🎅" } },
        { value: "🎄", left: { value: "🎅" }, right: { value: "⭐" } }
      ],
      output: [true, "🎄"]
    },
    {
      input: [
        { value: "✨", left: { value: "⭐" }, right: { value: "🎅" } },
        { value: "✨", left: { value: "🎅" }, right: { value: "🎁" } }
      ],
      output: [false, "✨"]
    },
    {
      input: [
        { value: "🎁" },
        { value: "🎁" }
      ],
      output: [true, "🎁"]
    },
    {
      input: [
        { value: "🎄" },
        { value: "🎁" }
      ],
      output: [false, "🎄"]
    },
    {
      input: [
        { value: "🎄", left: { value: "⭐" } },
        { value: "🎄", right: { value: "⭐" } }
      ],
      output: [true, "🎄"]
    },
  ];

  it("Should return an array", () => {
    expect(typeof isTreesSynchronized(...TEST_CASES[0].input)).toBe(typeof []);
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(isTreesSynchronized(...input)).toEqual(output);
  });
});