import sum from "./sum.js";

describe("Given a sum function", () => {
  describe("When it's called and it receives 4 and 2", () => {
    test("Then it should return 6", () => {
      const number1 = 4;
      const number2 = 2;
      const expectedTotal = 6;

      const total = sum(number1, number2);

      expect(total).toBe(expectedTotal);
    });
  });

  describe("When it's called and it receives 'Hola' and 'Caracola'", () => {
    test("Then it should throw a 'Please enter only numbers' error", () => {
      const word1 = "Hola";
      const word2 = "Caracola";
      const expectedErrorMessage = "Please enter only numbers";

      expect(() => {
        sum(word1, word2);
      }).toThrow(expectedErrorMessage);
    });
  });
});
