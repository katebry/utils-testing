function forbiddenCharactersValidator(value) {
    if (!value) return true;
    const forbiddenCharactersRegex = /[;<>\\/"'`|€]/g;
    return forbiddenCharactersRegex.test(value);
}

module.exports = forbiddenCharactersValidator;
