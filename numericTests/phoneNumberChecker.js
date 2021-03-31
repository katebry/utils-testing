function mobileNumberChecker(value) {
  if (value === null) return true;
  if (isNaN(value)) return false;
  if (value.substring(0, 2) !== "07") return false;
  if (value.length !== 11) return false;
  return true;
}

function landlineNumberChecker(value) {
  if (!value) return true;
  if (isNaN(value)) return false;
  if (value.substring(0, 1) !== "0") return false;
  return true;
}

module.exports = { mobileNumberChecker, landlineNumberChecker };
