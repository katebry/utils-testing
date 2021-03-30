function addSpacesToCamelCase(string) {
  if (!string) return false;
  return string.replace(/([A-Z](?=[a-z]+)|[A-Z]+(?![a-z]))/g, ' $1')
}

module.exports = { addSpacesToCamelCase };
