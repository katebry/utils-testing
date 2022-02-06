const developerList = require("./testData");
const developerValueCounter = require("./developerValueCounter")

test('If no value is passed in, the function returns false', () => {
    expect(developerValueCounter('')).toBe(false);
});