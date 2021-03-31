function addPoundSign(value) {
  if (!value) return "£0";
  if (value.indexOf("£") != -1) return value;
  const newValue = value.split("-");
  return newValue.length > 1 ? `-£${newValue[1]}` : `£${newValue}`;
}

function formatSortCode(value) {
  if (!value) return false;
  return `${value.substring(0, 2)}-${value.substring(2, 4)}-${value.substring(
    4,
    6
  )}`;
}

function maskCreditCard(value) {
  if (!value) return false;
  return `**** **** **** ${value.substring(12, 16)}`;
}

module.exports = { addPoundSign, formatSortCode, maskCreditCard };
