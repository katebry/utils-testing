const derivativeFinder = require("./derivativeFinder");

test('If no value is passed in, the function returns false', () => {
    expect(derivativeFinder()).toBe(false);
});