const numericExtractor = require("./numericExtractor")

test('If no value is passed in, the function returns false', () => {
    expect(numericExtractor('')).toBe(false)
});

test('If a string containing any non-digit characters is passed in, only the integer is returned', () => {
    expect(numericExtractor('A4')).toBe('4')
    expect(numericExtractor(' 1')).toBe('1')
    expect(numericExtractor("%$ C2")).toBe('2')
    expect(numericExtractor('A"    6 |VBFK, LDFE')).toBe('6')
});

test('If a string containing numeric characters is passed in, the integers are returned in descending order', () => {
    expect(numericExtractor('1')).toBe('1')
    expect(numericExtractor('12')).toBe('21,12')
    expect(numericExtractor('ABS32')).toBe('32,23')
    expect(numericExtractor('4____"%6')).toBe('64,46')
    expect(numericExtractor('12RF "?>3 __ @')).toBe('321,312,231,213,132,123')
    expect(numericExtractor('1234LDVEWPVKWV      "|"+')).toBe('4321,4312,4231,4213,4132,4123,3421,3412,3241,3214,3142,3124,2431,2413,2341,2314,2143,2134,1432,1423,1342,1324,1243,1234')
})

