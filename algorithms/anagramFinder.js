function anagramFinder(word, words) {
    if (!word) return []
    return words.filter(val => val === word);
}

module.exports = anagramFinder;