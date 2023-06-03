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

describe("pomodoro #3", () => {
  test("should return 2 when given 30 by calculating it", () => {
    expect(atm("a")).toBe(-1);
  });

  test("should return 3 when given 1500 by calculating it", () => {
    expect(atm(1500)).toBe(3);
  });

  test("should return -1 when given 1501 by calculating it", () => {
    expect(atm(1501)).toBe(-1);
  });
});

describe("pomodoro #4", () => {
  test("should return -1 when given 1501 by calculating it", () => {
    expect(atm(3000)).toBe(-1);
  });

  test("should return -1 when given -1 by calculating it", () => {
    expect(atm(-1)).toBe(-1);
  });

  test("should return 3 when given 800 by calculating it", () => {
    expect(atm(800)).toBe(3);
  });

  test("should return -1 when given an empty string", () => {
    expect(atm(" ")).toBe(-1);
  });
});
