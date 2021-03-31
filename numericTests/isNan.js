function isNan(value) {
    if (!value) return false
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value)
}

module.exports = isNan