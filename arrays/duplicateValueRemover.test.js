const duplicateValueRemover = require("./duplicateValueRemover");

test('If the second array passed into the function is empty, return the value of array1', () => {
    expect(duplicateValueRemover([], [])).toEqual([]);
});

test('If the first array passed into the function is empty, return the empty value', () => {
    expect(duplicateValueRemover([], [1, 2])).toEqual([]);
});

test('If a duplicate value is found in array2, this is removed from the first array and then returned', () => {
    expect(duplicateValueRemover([1, 3], [1, 2])).toEqual([3]);
    expect(duplicateValueRemover([1, 8, 2], [1, 2])).toEqual([8]);
    expect(duplicateValueRemover([1, 2, 3], [1, 3])).toEqual([2]);
});