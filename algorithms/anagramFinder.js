function anagramFinder(word, words) {
    if (!word) return []
    let indexArray = []
    let sortedWord = sorter(word)
    // sort each of the words in the array by a-b
    // sort the word to match in the array by a-b
    // run through the array and return the index value of each match
    // return the filtered original matching (non-sorted) values as an array
    // return words.filter(val => val === word);

    words.forEach((val, index) => {
        let sortedVal = sorter(val)
        console.log(sortedVal)
        if (sortedVal === sortedWord) return indexArray.push(index)
    })
    console.log(indexArray)
}

function sorter(string) {
    return string.split('').sort().join('');
}

module.exports = anagramFinder;