function addSpacesToCamelCase(string) {
  if (!string) return false;
  return string.replace(/([A-Z](?=[a-z]+)|[A-Z]+(?![a-z]))/g, " $1");
}

function capitalise(data) {
  if (!data) return false;
  return data
    .toLowerCase()
    .replace(/(^\w{1})|(\s{1}\w{1})/g, (match) => match.toUpperCase());
}

function capitaliseFirstLetter(string) {
  if (!string) return false;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toKebabCase(string) {
    if (!string) return false
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

module.exports = { addSpacesToCamelCase, capitalise, capitaliseFirstLetter, toKebabCase };
