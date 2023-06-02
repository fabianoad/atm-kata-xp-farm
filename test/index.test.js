const { atm } = require("../src/index");

describe("first test to check if not sending a value it does not return anything", () => {
  test("should return -1", () => {
    expect(atm()).toBe(-1);
  });

  test("should return a number different than -1 given 100", () => {
    expect(atm(100)).toBe(1);
  });

  test("should return a number different than -1 given 500", () => {
    expect(atm(500)).toBe(1);
  });
});
