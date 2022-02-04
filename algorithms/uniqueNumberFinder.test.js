const uniqueNumberFinder = require("./uniqueNumberFinder")

test('If no value is passed in, the function returns false', () => {
    expect(uniqueNumberFinder('')).toBe(false);
});

test('If an array of values is passed in, a unique number will be returned', () => {
    expect(uniqueNumberFinder([1, 0, 0])).toBe(1);
    expect(uniqueNumberFinder([3, 3, 4])).toBe(4);
    expect(uniqueNumberFinder([1, 0, 0, 2, 3, 4, 4, 2, 1, 7, 7])).toBe(3);
});