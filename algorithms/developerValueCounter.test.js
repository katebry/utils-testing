const {developerList, developerList2} = require("./testData");
const developerValueCounter = require("./developerValueCounter")

test('If no value is passed in, the function returns false', () => {
    expect(developerValueCounter()).toBe(false);
});

test('If the number of one set of developers is no more than 2 times higher than the number of developers representing any of the remaining programming language, return true ', () => {
    expect(developerValueCounter(developerList2)).toBe(true);
});

test('If the number of one set of developers is more than 2 times higher return false ', () => {
    expect(developerValueCounter(developerList)).toBe(false);
});