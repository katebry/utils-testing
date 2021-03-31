const forbiddenCharactersValidator = require("./forbiddenCharacters");

test("Checks whether a forbidden character has been passed in and returns true if so, if the character is allowed, false is returned", () => {
  expect(forbiddenCharactersValidator("")).toBe(true);
  expect(forbiddenCharactersValidator("Hello")).toBe(false);
  expect(forbiddenCharactersValidator("Hello;")).toBe(true);
  expect(forbiddenCharactersValidator("Hello ` World")).toBe(true);
  expect(forbiddenCharactersValidator("€Hello World")).toBe(true);
  expect(forbiddenCharactersValidator('Hello "World" ')).toBe(true);
  expect(forbiddenCharactersValidator("Hello' World")).toBe(true);
  expect(forbiddenCharactersValidator("Hello|")).toBe(true);
  expect(forbiddenCharactersValidator("Hello World /")).toBe(true);
  expect(forbiddenCharactersValidator("Hello \\ World")).toBe(true);
  expect(forbiddenCharactersValidator("Hello > ")).toBe(true);
  expect(forbiddenCharactersValidator("Hello <")).toBe(true);
  expect(
    forbiddenCharactersValidator("A random sentence @ £ $ % ^ & * ( ) 1234")
  ).toBe(false);
});
