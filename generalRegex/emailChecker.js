function emailChecker(value) {
  if (!value) return false;
  const firstCharacter = value.slice(0, 1);
  const finalCharacter = value.slice(-1);
  const emailRegex = /^[a-zA-Z0-9!#$%&.'*+-/=?^_`{|}~@]{6,70}$/;
  const result = emailRegex.test(value);
  if (result) {
    return firstCharacter !== "." && finalCharacter !== "." ? true : false;
  } else {
    return false;
  }
}

module.exports = emailChecker;
