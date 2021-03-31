const forbiddenCharactersValidator = require("./forbiddenCharacters");

function validPassword(value) {
  if (!value || value.length < 8 || value.length > 30) return false;
  if (forbiddenCharactersValidator(value)) return false;

  let validCounter = 0;

  const validationRegexSteps = [
    /^(.*[A-Z].*)$/,
    /^(.*[a-z].*)$/,
    /^(.*[0-9].*)$/,
    /^(.*\W.*)$/,
  ];

  validationRegexSteps.forEach(function (regex) {
    if (regex.test(value)) validCounter++;
  });

  return validCounter >= 3;
}

module.exports = validPassword;
