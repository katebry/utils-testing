const cyclopsFinder = require("./cyclopsFinder")

test("If the value passed to the function is empty, false is returned", () => {
    expect(cyclopsFinder()).toBe(false);
})

test("If the value passed to the function is a cyclops number, true is returned", () => {
    expect(cyclopsFinder(5)).toBe(true);
    expect(cyclopsFinder(27)).toBe(true);
    expect(cyclopsFinder(2015)).toBe(true);
})

test("If the value passed to the function is not a cyclops number, false is returned", () => {
    expect(cyclopsFinder(1)).toBe(false);
    expect(cyclopsFinder(666)).toBe(false);
    expect(cyclopsFinder(13)).toBe(false);
    expect(cyclopsFinder(3)).toBe(false);
    expect(cyclopsFinder(23)).toBe(false);

})