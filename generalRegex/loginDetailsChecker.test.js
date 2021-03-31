const {
  validUserName,
  jsonFormatter,
  validPassword,
} = require("./loginDetailsChecker");

test("Checks the value passed to the username field is between 8-30 characters without whitespace", () => {
  expect(validUserName("Test")).toBe(false);
  expect(validUserName("Testing ")).toBe(false);
  expect(validUserName("Testing1234567890!@£$%^&*()~!@T")).toBe(false);
  expect(validUserName("T€sting123")).toBe(false);
  expect(validUserName("Tes<ing123")).toBe(false);
  expect(validUserName("Tes>ing123")).toBe(false);
  expect(validUserName("Test;ng123")).toBe(false);
  expect(validUserName("Testing1234567890!@£$%^&*()~!@")).toBe(true);
  expect(validUserName("T3st1ng@")).toBe(true);
  expect(validUserName("testing123!")).toBe(true);
  expect(validUserName("Test'ing123")).toBe(true);
});

test("Checks the value passed to the password field is between 8-20 characters with a minimum of one uppercase/ lowercase letter, one number and one special character and without whitespace", () => {
  expect(validPassword("Testing")).toBe(false);
  expect(validPassword("Test ing123$")).toBe(false);
  expect(validPassword("Testing!|$")).toBe(false);
  expect(validPassword("+3$+!()2345")).toBe(false);
  expect(validPassword("Testing123Testing123!")).toBe(false);
  expect(validPassword("testing123$")).toBe(false);
  expect(validPassword("TESTING123£")).toBe(false);
  expect(validPassword("Testing123Testing12£")).toBe(true);
  expect(validPassword("Testing123$%")).toBe(true);
});