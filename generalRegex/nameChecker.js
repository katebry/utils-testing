function validFirstName(value) {
  if (!value) return false;
  const firstNameRegex = /^([a-zA-Z]?|[a-z]+[-]?)+$/;
  const result = firstNameRegex.test(value);
  return result;
}

function validLastName(value) {
  if (!value) return false;
  const lastNameRegex = /^([a-zA-Z]+[ ']?|[a-z]+[-']?)+$/;
  const result = lastNameRegex.test(value);
  return result;
}

module.exports = { validFirstName, validLastName };
