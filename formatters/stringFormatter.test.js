const {
  capitalise,
  capitaliseFirstLetter,
  addSpacesToCamelCase,
  toKebabCase,
} = require("./stringFormatter");

test("Capitalises the first letter of each word", () => {
  expect(capitalise("")).toBe(false);
  expect(capitalise("HELLO")).toBe("Hello");
  expect(capitalise("HELLO world")).toBe("Hello World");
  expect(capitalise("hello world aND GoODBye")).toBe("Hello World And Goodbye");
});

test("Capitalises the first letter in a sentence", () => {
  expect(capitaliseFirstLetter("")).toBe(false);
  expect(capitaliseFirstLetter("hello")).toBe("Hello");
  expect(capitaliseFirstLetter("hello world")).toBe("Hello world");
});

test("Adds spaces to a camelCased string", () => {
  expect(addSpacesToCamelCase("")).toBe(false);
  expect(addSpacesToCamelCase("helloWorld")).toBe("hello World");
  expect(addSpacesToCamelCase("helloWorldAndGoodbye")).toBe(
    "hello World And Goodbye"
  );
});

test("Converts a string to kebab-case", () => {
  expect(toKebabCase("")).toBe(false);
  expect(toKebabCase("Hello")).toBe("hello");
  expect(toKebabCase("HelloWorld")).toBe("hello-world");
  expect(toKebabCase("Hello worldAnd Goodbye")).toBe("hello-world-and-goodbye");
});
