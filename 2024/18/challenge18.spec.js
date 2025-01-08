const findInAgenda = require("./challenge18");

describe("Challenge 18 Tests", () => {
  const TEST_CASES = [
    {
      input: [
        "+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n" +
        "Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n" +
        "<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York",
        "34-600-123-456"
      ],
      output: {
        "name": "Juan Perez",
        "address": "Calle Gran Via 12"
      }
    },
    {
      input: [
        "+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n" +
        "Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n" +
        "<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York",
        "600-987"
      ],
      output: {
        "name": "Maria Gomez",
        "address": "Plaza Mayor 45 Madrid 28013"
      }
    },
    {
      input: [
        "+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n" +
        "Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n" +
        "<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York",
        "111"
      ],
      output: null
    },
    {
      input: [
        "+34-600-123-456 Calle Gran Via 12 <Juan Perez>\n" +
        "Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n" +
        "<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York",
        "1"
      ],
      output: null
    },
  ];

  it("Should return an object", () => {
    expect(typeof findInAgenda(...TEST_CASES[0].input)).toBe(typeof {});
  });

  it.each(TEST_CASES)("Should pass the test cases successfully", ({ input, output }) => {
    expect(findInAgenda(...input)).toEqual(output);
  });
});