const emailChecker = require("./emailChecker");

test("Checks that the value passed to the email address field is valid", () => {
  expect(emailChecker("")).toBe(false);
  expect(emailChecker(undefined)).toBe(false);
  expect(emailChecker("kat]e@.com")).toBe(false);
  expect(emailChecker(".random.email.address@me.com")).toBe(false);
  expect(emailChecker("fraud@gotyou.com.")).toBe(false);
  expect(emailChecker(".fakeEmail@fake.email.")).toBe(false);
  expect(emailChecker("test@test.com")).toBe(true);
  expect(emailChecker("kate.bryan@e-mailaddress.co.uk")).toBe(true);
});
