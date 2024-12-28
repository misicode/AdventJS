const decodeFilename = require("./challenge11");

describe("Challenge 11 Tests", () => {
  const TEST_CASES = [
    {
      input: "2023122512345678_sleighDesign.png.grinchwa",
      output: "sleighDesign.png"
    },
    {
      input: "42_chimney_dimensions.pdf.hack2023",
      output: "chimney_dimensions.pdf"
    },
    {
      input: "987654321_elf-roster.csv.tempfile",
      output: "elf-roster.csv"
    },
    {
      input: "2024120912345678_magic_wand-blueprint.jpg.grinchbackup",
      output: "magic_wand-blueprint.jpg"
    },
    {
      input: "51231_trainSchedule.txt.extra",
      output: "trainSchedule.txt"
    },
  ];

  it("Should return a string", () => {
    expect(typeof decodeFilename(TEST_CASES[0].input)).toBe(typeof "");
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(decodeFilename(input)).toEqual(output);
  });
});