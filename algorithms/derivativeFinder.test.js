const derivativeFinder = require("./derivativeFinder");

test('If no value is passed in, the function returns false', () => {
    expect(derivativeFinder("")).toBe(false);
});

test('If the string contains a number with no "x" value, return 0', () => {
    expect(derivativeFinder("42")).toBe('0');
});