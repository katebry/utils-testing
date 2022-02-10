function duplicateValueRemover(array1, array2) {
    if (array2.length <= 0) return array1;
    return array1.filter(val => !array2.includes(val));
}

module.exports = duplicateValueRemover;