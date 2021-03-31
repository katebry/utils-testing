const {
  sortCodeValidator,
  accountNumberValidator,
} = require("./paymentChecker");

test("Checks that a valid sortcode value has been passed in", () => {
  expect(sortCodeValidator("")).toBe(false);
  expect(sortCodeValidator("0")).toBe(false);
  expect(sortCodeValidator("00")).toBe(false);
  expect(sortCodeValidator("000")).toBe(false);
  expect(sortCodeValidator("0000")).toBe(false);
  expect(sortCodeValidator("00000")).toBe(false);
  expect(sortCodeValidator("1111111")).toBe(false);
  expect(sortCodeValidator("00000d")).toBe(false);
  expect(sortCodeValidator("00kat3")).toBe(false);
  expect(sortCodeValidator("*001122")).toBe(false);
  expect(sortCodeValidator("111111")).toBe(true);
});

test("Checks that a valid account number value has been passed in", () => {
  expect(accountNumberValidator("")).toBe(false);
  expect(accountNumberValidator("0")).toBe(false);
  expect(accountNumberValidator("00")).toBe(false);
  expect(accountNumberValidator("000")).toBe(false);
  expect(accountNumberValidator("0000")).toBe(false);
  expect(accountNumberValidator("00000")).toBe(false);
  expect(accountNumberValidator("1111111")).toBe(false);
  expect(accountNumberValidator("00000d")).toBe(false);
  expect(accountNumberValidator("00kat3")).toBe(false);
  expect(accountNumberValidator("*001122")).toBe(false);
  expect(accountNumberValidator("1111111")).toBe(false);
  expect(accountNumberValidator("1111111k")).toBe(false);
  expect(accountNumberValidator("11111111")).toBe(true);
});
