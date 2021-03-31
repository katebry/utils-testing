// I, J and Z should not be in second position.
// A, B, C, D, E, F, G, H, J, K, S, T, U and W or 0 - 9 should be in 3rd position.
// C, I, K, M, O and V are never used in last 3 characters.

const minPostCodeLength = 5
const maxPostCodeLength = 7

function postCodeChecker(value) {
    if (!value) return false
    value = value.toUpperCase()
    const formattedValue = value.replace(/\s/g, '')

    const validCharacterRegex = /[^\w\d]/
    const firstValueRegex = /[QVX]/
    const secondValueRegex = /[IJZ]/
    const thirdValueRegex = /[^ABCDEFGHJKSTUW0-9]/
    const lastThreeLettersRegex = /[CIKMOV]+/
    const basicPostCodeRegex = /[A-Z]{1,2}\d{1,2}[A-Z]?\d[A-Z]{2}/

    if (validCharacterRegex.test(formattedValue)) return false
    if (formattedValue.length > maxPostCodeLength || formattedValue.length < minPostCodeLength) return false

    const firstLetter = formattedValue.charAt(0)
    const secondLetter = formattedValue.charAt(1)
    const thirdLetter = formattedValue.charAt(2)
    const lastThreeLetters = formattedValue.substr(formattedValue.length - 3)

    if (firstValueRegex.test(firstLetter)) return false
    if (secondValueRegex.test(secondLetter)) return false
    if (thirdValueRegex.test(thirdLetter)) return false
    if (lastThreeLettersRegex.test(lastThreeLetters)) return false
    if (basicPostCodeRegex) return true
}

module.exports =  postCodeChecker