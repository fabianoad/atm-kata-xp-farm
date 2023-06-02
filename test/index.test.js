const { atm } = require("../src/index");

describe("first test to check if not sending a value it does not return anything", () => {
  test("should return -1", () => {
    expect(atm()).toBe(-1);
  });
});
