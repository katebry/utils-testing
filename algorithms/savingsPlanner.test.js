const {savingsPlanner, percentageDecrease} = require("./savingsPlanner");

test('Returns the total value after subtracting the percentage decrease', () => {
    expect(percentageDecrease(1.5, 8000)).toBe(7880);
    expect(percentageDecrease(2.5, 8000)).toBe(7800);
    expect(percentageDecrease(5, 8000)).toBe(7600);
});

test('If the starting price of the old car matches that of the new car, the 0 result is returned', () => {
    expect(savingsPlanner(8000, 8000, 1000, 1.5)).toEqual([0, 0])
});

test('Returns the savingsPlanner result as an array of two values', () => {
    expect(savingsPlanner(12000, 8000, 1000, 1.5)).toEqual([0, 4000])
    expect(savingsPlanner(2000, 8000, 1000, 1.5)).toEqual([6, 766])
});
