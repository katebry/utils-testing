function numericExtractor(value) {
  if (!value) return false;
  const formattedValue = value.replace(/\D/g, "");
  if (formattedValue.length === 1) {
    return formattedValue;
  } else {
    const unsortedValues = permutationFunction(formattedValue);
    const sortedValues = unsortedValues.sort((a, b) => b - a);
    const filteredValues = sortedValues.filter(
      (value, index) => sortedValues.indexOf(value) === index
    );
    return filteredValues.toString();
  }
}

const permutationFunction = (value) => {
  if (value.length <= 2)
    return value.length === 2 ? [value, value[1] + value[0]] : [value];
  return value
    .split("")
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          permutationFunction(value.slice(0, i) + value.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

module.exports = numericExtractor;
