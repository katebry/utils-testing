const anagramFinder = require("./anagramFinder")

test("If the value passed to the function is empty, an empty array is returned", () => {
    expect(anagramFinder()).toEqual([]);
})

test("If the word passed in matches the single word in the array, this is returned", () => {
    expect(anagramFinder('abba', ['abba'])).toEqual(['abba']);
})