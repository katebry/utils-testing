const duplicateValueRemover = require("./duplicateValueRemover");

test('If the second array passed into the function is empty, return the value of array1', () => {
    expect(duplicateValueRemover([], [])).toEqual([]);
})

test('If the first array passed into the function is empty, return the empty value', () => {
    expect(duplicateValueRemover([], [1, 2])).toEqual([]);
})