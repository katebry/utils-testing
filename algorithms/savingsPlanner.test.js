const savingsPlanner = require("./savingsPlanner");

test('If no value is passed in, the function returns false', () => {
    expect(savingsPlanner('')).toBe(false)
});