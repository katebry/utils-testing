function cyclopsFinder(value) {
    if (!value) return false;
    const binary = value.toString(2);
    if (+binary === 1) return false;
    let numberOfZeroes = binary.match(/0/g);
    if (numberOfZeroes && numberOfZeroes.length > 1) return false;
    const middleChar = binary.substr(Math.ceil(binary.length / 2 - 1), binary.length % 2 === 0 ? 2 : 1);
    return (+middleChar === 0);
}

module.exports = cyclopsFinder;