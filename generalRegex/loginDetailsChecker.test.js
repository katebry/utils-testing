const {
  validUserName,
  jsonFormatter,
  validPassword,
  nonConsecutiveNumbers,
  validSecurityCode,
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

test('Checks if the value passed in contains a \\ or ", and if it does, the value is formatted', () => {
  expect(jsonFormatter("helloWorld01")).toMatchObject({
    formattedValue: "",
    result: false,
  });
  expect(jsonFormatter("helloWorld02")).toMatchObject({
    formattedValue: "",
    result: false,
  });
  expect(jsonFormatter("hellowWorld01%")).toMatchObject({
    formattedValue: "",
    result: false,
  });
  expect(jsonFormatter("helloWorld01$%!")).toMatchObject({
    formattedValue: "",
    result: false,
  });
  expect(jsonFormatter('h"e\\l"loWorld02"')).toMatchObject({
    formattedValue: 'h\\"e\\\\l\\"loWorld02\\"',
    result: true,
  });
  expect(jsonFormatter('hello\\World"01')).toMatchObject({
    formattedValue: 'hello\\\\World\\"01',
    result: true,
  });
  expect(jsonFormatter('hello\\W\\orld"01')).toMatchObject({
    formattedValue: 'hello\\\\W\\\\orld\\"01',
    result: true,
  });
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

test("Checks the value passed into the security code field is not a set of sequential, consecutive numbers", () => {
  expect(nonConsecutiveNumbers("123456")).toBe(false);
  expect(nonConsecutiveNumbers("654321")).toBe(false);
  expect(nonConsecutiveNumbers("456789")).toBe(false);
  expect(nonConsecutiveNumbers("987654")).toBe(false);
  expect(nonConsecutiveNumbers("012345")).toBe(false);
  expect(nonConsecutiveNumbers("123542")).toBe(true);
  expect(nonConsecutiveNumbers("987453")).toBe(true);
  expect(nonConsecutiveNumbers("456312")).toBe(true);
  expect(nonConsecutiveNumbers("345670")).toBe(true);
});

test("Checks the value passed into the security code field is a number, with no more than 2 consecutive numbers the same", () => {
  expect(validSecurityCode("111111")).toBe(false);
  expect(validSecurityCode("1234567")).toBe(false);
  expect(validSecurityCode("12345")).toBe(false);
  expect(validSecurityCode("111234")).toBe(false);
  expect(validSecurityCode("123456")).toBe(false);
  expect(validSecurityCode("654321")).toBe(false);
  expect(validSecurityCode("123453")).toBe(true);
  expect(validSecurityCode("112233")).toBe(true);
  expect(validSecurityCode("990320")).toBe(true);
  expect(validSecurityCode("833733")).toBe(true);
});
