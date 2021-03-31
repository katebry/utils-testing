const {
  nonConsecutiveNumbers,
  validSecurityCode,
} = require("./securityCodeChecker");

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
