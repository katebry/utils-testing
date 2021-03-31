const {
  validDay,
  validMonth,
  validAge,
  validBirthday,
} = require("./ageChecker");

test('Checks the value passed into the "day" field is a two digit number between 1-31 (format "01" etc)', () => {
  expect(validDay("a")).toBe(false);
  expect(validDay("%")).toBe(false);
  expect(validDay(32)).toBe(false);
  expect(validDay(0)).toBe(false);
  expect(validDay(31)).toBe(true);
  expect(validDay("01")).toBe(true);
});

test('Checks the value passed into the "month" field is a two digit number between 1-12 (format "01" etc)', () => {
  expect(validMonth("a")).toBe(false);
  expect(validMonth("%")).toBe(false);
  expect(validMonth(13)).toBe(false);
  expect(validMonth(0)).toBe(false);
  expect(validMonth(11)).toBe(true);
  expect(validMonth("02")).toBe(true);
});

test("Checks the dob value is valid (18+ && younger than 150)", () => {
  expect(validAge(31, 12, 2013)).toBe(false);
  expect(validAge("05", "06", 2002)).toBe(true);
  expect(validAge(12, 12, 2000)).toBe(true);
  expect(validAge(12, 12, 1850)).toBe(false);
  expect(validAge(12, 12, 1880)).toBe(true);
});

test("Checks if the dob is a valid date - considers leap years", () => {
  expect(validBirthday(31, 2, 1990)).toBe(false);
  expect(validBirthday(29, 2, 1990)).toBe(false);
  expect(validBirthday(0, 0, 1000)).toBe(false);
  expect(validBirthday("01", "01", 1994)).toBe(true);
  expect(validBirthday(29, "02", 2000)).toBe(true);
});
