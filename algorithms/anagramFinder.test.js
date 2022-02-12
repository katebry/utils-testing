const anagramFinder = require("./anagramFinder")

test("If the value passed to the function is empty, an empty array is returned", () => {
    expect(anagramFinder()).toStrictEqual([]);
})

test("If the word passed in matches the single word in the array, this is returned", () => {
    expect(anagramFinder('abba', ['abba'])).toStrictEqual(['abba']);
})

test("If the word passed in matches one of the words in the array, this is returned", () => {
    expect(anagramFinder('abba', ['kate', 'bake', 'abba'])).toStrictEqual(['abba']);
})