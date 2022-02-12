const anagramFinder = require("./anagramFinder")

test("If the value passed to the function is empty, an empty array is returned", () => {
    expect(anagramFinder()).toEqual([]);
})