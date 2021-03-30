const { addSpacesToCamelCase, capitalise } = require("./stringFormatter");

test("Adds spaces to a camelCased string", () => {
  expect(addSpacesToCamelCase("")).toBe(false);
  expect(addSpacesToCamelCase("helloWorld")).toBe("hello World");
  expect(addSpacesToCamelCase("helloWorldAndGoodbye")).toBe(
    "hello World And Goodbye"
  );
});

test("Capitalises the first letter of each word", () => {
  expect(capitalise("")).toBe(false);
  expect(capitalise("HELLO")).toBe("Hello");
  expect(capitalise("HELLO world")).toBe("Hello World");
  expect(capitalise("hello world aND GoODBye")).toBe("Hello World And Goodbye");
});
