const { addSpacesToCamelCase } = require("./stringFormatter");

test("Adds spaces to a camelCased string", () => {
  expect(addSpacesToCamelCase("")).toBe(false);
  expect(addSpacesToCamelCase("helloWorld")).toBe("hello World");
  expect(addSpacesToCamelCase("helloWorldItsMeMario")).toBe('hello World Its Me Mario')
});
