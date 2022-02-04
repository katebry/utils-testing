function uniqueNumberFinder(value) {
    if (!value) return false
    let numCount = {};
    let uniqueNumber;

    for (let i = 0; i < value.length; i++) {
        if (numCount[value[i]]) {
            numCount[value[i]]++;
        } else {
            numCount[value[i]] = 1;
        }
    }

    uniqueNumber = Object.keys(numCount).find(key => numCount[key] === 1);
    return parseFloat(uniqueNumber)
}

module.exports = uniqueNumberFinder;