const { atm } = require("../src/index");

describe("pomodoro #1", () => {
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

describe("pomodoro #2", () => {
  test("should return 2 when given 30", () => {
    expect(atm(30)).toBe(2);
  });
});
