const {savingsPlanner, percentageDecrease} = require("./savingsPlanner");

test('Returns the total value after subtracting the percentage decrease', () => {
    expect(percentageDecrease(1.5, 8000)).toBe(7880);
    expect(percentageDecrease(2.5, 8000)).toBe(7800);
    expect(percentageDecrease(5, 8000)).toBe(7600);
});

test('Returns the savingsPlanner result as an array of two values', () => {
    expect(savingsPlanner(8000, 8000, 1000, 1.5)).toStrictEqual([0, 1.5])
});
