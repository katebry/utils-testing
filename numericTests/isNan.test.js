const isNan = require('./isNan')

test('Checks if the value passed in is a number', () => {
    expect(isNan('')).toBe(false)
    expect(isNan(3000)).toBe(3000)
    expect(isNan(null)).toBe(false)
    expect(isNan(undefined)).toBe(false)
})