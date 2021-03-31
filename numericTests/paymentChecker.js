function sortCodeValidator(value) {
  if (!value) return false;
  const sortCodeRegex = /^[0-9]{6}$/;
  const result = sortCodeRegex.test(value);
  return result;
}

function accountNumberValidator(value) {
  if (!value) return false;
  const accountNumberRegex = /^[0-9]{8}$/;
  const result = accountNumberRegex.test(value);
  return result;
}

module.exports = { sortCodeValidator, accountNumberValidator };
