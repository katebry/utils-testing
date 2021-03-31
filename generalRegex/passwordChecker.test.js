const validPassword = require("./passwordChecker");

test("Checks that the password hits at least 3 of the validation criteria - capital letter, lowercase, special character, numeric and between 8 - 30 characters", () => {
  expect(validPassword("Mynewpassword123!")).toBe(true);
  expect(validPassword("mynew123passwor!d")).toBe(true);
  expect(validPassword("123MYNEWPASSWORD!")).toBe(true);
  expect(validPassword("!Mynewpassword!")).toBe(true);
  expect(validPassword("my123newpassworD")).toBe(true);
});

test('Checks for invalid password formats', () => {
    expect(validPassword('mynewpassword123')).toBe(false) 
    expect(validPassword('MyNewPassword123<>')).toBe(false) 
    expect(validPassword('')).toBe(false) 
    expect(validPassword('Pass1!')).toBe(false) 
    expect(validPassword('AVeryyyyyyyyyyyyyyLongPassssssssssssssssword!!!!!!!!!!!!!!!!')).toBe(false) 
})
