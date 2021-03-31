function forbiddenCharactersValidator(value) {
  if (!value) return true;
  const forbiddenCharactersRegex = /[;<>\\/"'`|€]/g;
  const result = forbiddenCharactersRegex.test(value);
  return result;
}

module.exports = forbiddenCharactersValidator;
