const {
  mobileNumberChecker,
  landlineNumberChecker,
} = require("./phoneNumberChecker");

test("Checks that a valid mobile phone number has been passed in", () => {
  expect(mobileNumberChecker("")).toBe(false);
  expect(mobileNumberChecker("077999999")).toBe(false);
  expect(mobileNumberChecker("0779999999")).toBe(false);
  expect(mobileNumberChecker("NotEvenANumber")).toBe(false);
  expect(mobileNumberChecker("07123456789")).toBe(true);
});

test("Checks that a valid landline number has been passed in", () => {
  expect(landlineNumberChecker("")).toBe(true);
  expect(landlineNumberChecker("99999999999")).toBe(false);
  expect(landlineNumberChecker("NotEvenANumber")).toBe(false);
  expect(landlineNumberChecker("01942699916")).toBe(true);
});
