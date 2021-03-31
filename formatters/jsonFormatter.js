function jsonFormatter(value) {
  let formattedValue = "";
  const specialCharactersRegex = /["\\]/;
  const result = specialCharactersRegex.test(value);
  if (result) {
    const res = value.replace(/\\/g, "\\\\");
    formattedValue = res.replace(/"/g, '\\"');
  }
  return { result, formattedValue };
}

module.exports = jsonFormatter;
