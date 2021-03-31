const {
  addPoundSign,
  formatSortCode,
  maskCreditCard,
} = require("./paymentDetailsFormatter");

test("When a value is passed to the addPoundSign function, this is formatted with the £ character", () => {
  expect(addPoundSign("")).toBe("£0");
  expect(addPoundSign("3000.00")).toBe("£3000.00");
  expect(addPoundSign("-999.99")).toBe("-£999.99");
});

test("When a sort code is required, this is formatted with the `-` sign", () => {
  expect(formatSortCode("000000")).toBe("00-00-00");
  expect(formatSortCode("666312")).toBe("66-63-12");
});

test("When a credit card is displayed, the first 12 characters are masked with asterisks", () => {
  expect(maskCreditCard("")).toBe(false);
  expect(maskCreditCard("1122334455667788")).toBe("**** **** **** 7788");
});
