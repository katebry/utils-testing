const cyclopsFinder = require("./cyclopsFinder")

test("If the value passed to the function is empty, false is returned", () => {
    expect(cyclopsFinder()).toBe(false);
})