function anagramFinder(word, words) {
    if (!word) return []
    let indexArray = []

    words.forEach((val, index) => {
        let sortedVal = sorter(val)
        if (sortedVal === sorter(word)) return indexArray.push(index)
    })
    
    return words.filter((val, index) => indexArray.includes(index))
}

function sorter(string) {
    return string.split('').sort().join('');
}

module.exports = anagramFinder;