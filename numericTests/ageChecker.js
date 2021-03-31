function validDay(value) {
  if (!value) return false;
  const dayRegex = /(0[1-9]|[12]\d|3[01])/g;
  const result = dayRegex.test(value);
  return result;
}

function validMonth(value) {
  if (!value) return false;
  const monthRegex = /(0[1-9]|1[012])/g;
  const result = monthRegex.test(value);
  return result;
}

function validAge(day, month, year) {
  return (
    new Date(year + 18, month - 1, day) <= new Date() &&
    new Date(year + 150, month - 1, day) >= new Date()
  );
}

function over16(day, month, year) {
  return new Date(year + 16, month - 1, day) <= new Date();
}

function under120(day, month, year) {
  return new Date(year + 120, month - 1, day) >= new Date();
}

function daysInMonthTest(month, year) {
  switch (month) {
    case 2:
      return (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}

function validBirthday(day, month, year) {
  return (
    month >= 1 && month <= 12 && day > 0 && day <= daysInMonthTest(month, year)
  );
}

module.exports = {
  validDay,
  validMonth,
  validAge,
  over16,
  under120,
  daysInMonthTest,
  validBirthday,
};
