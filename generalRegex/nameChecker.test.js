const { validFirstName, validLastName } = require("./nameChecker");

test('Checks that the value passed into the first name field includes alphabetical characters/"-"', () => {
  expect(validFirstName("T est")).toBe(false);
  expect(validFirstName("T@st")).toBe(false);
  expect(validFirstName("T3st")).toBe(false);
  expect(validFirstName("Test-in g")).toBe(false);
  expect(validFirstName("test")).toBe(true);
  expect(validFirstName("Test")).toBe(true);
  expect(validFirstName("Test-ing")).toBe(true);
});

test('Checks that the value passed into the last name fields includes alphabetical characters/"-"/apostrophe/spaces', () => {
  expect(validLastName("test!ng")).toBe(false);
  expect(validLastName("Test !ng")).toBe(false);
  expect(validLastName("t3sting")).toBe(false);
  expect(validLastName("Testing- test .")).toBe(false);
  expect(validLastName("Test'ing Test -'test")).toBe(false);
  expect(validLastName("Test'ing Test-test")).toBe(true);
  expect(validLastName("Testing-test")).toBe(true);
  expect(validLastName("Testing Test-Test")).toBe(true);
  expect(validLastName("testing")).toBe(true);
  expect(validLastName("Test'ing-Test")).toBe(true);
});
