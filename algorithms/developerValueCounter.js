function developerValueCounter(value) {
    if (!value) return false;

    let rubyDevs = 0;
    let pythonDevs = 0;
    let javascriptDevs = 0;

    function filterByLanguage(item) {
        if (item.language === 'Ruby') {
            rubyDevs++
        }
        if (item.language === 'Python') {
            pythonDevs++
        } else if (item.language === 'JavaScript') {
            javascriptDevs++
        }
    }

    let developerCount = value.filter(filterByLanguage).concat(rubyDevs, pythonDevs, javascriptDevs).sort((a, b) => a - b);
    return ((developerCount[0] * 2) >= developerCount[2])
}

module.exports = developerValueCounter;