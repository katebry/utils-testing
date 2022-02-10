const duplicateValueRemover = require("./duplicateValueRemover");

test('If the two arrays passed into the function are empty, return false', () => {
    expect(duplicateValueRemover('')).toBe(true);
})