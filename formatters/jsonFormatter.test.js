const jsonFormatter = require("./jsonFormatter");

test('Checks if the value passed in contains a \\ or ", and if it does, the value is formatted', () => {
  expect(jsonFormatter("helloWorld01")).toMatchObject({
    formattedValue: "",
    result: false,
  });
  expect(jsonFormatter("helloWorld02")).toMatchObject({
    formattedValue: "",
    result: false,
  });
  expect(jsonFormatter("hellowWorld01%")).toMatchObject({
    formattedValue: "",
    result: false,
  });
  expect(jsonFormatter("helloWorld01$%!")).toMatchObject({
    formattedValue: "",
    result: false,
  });
  expect(jsonFormatter('h"e\\l"loWorld02"')).toMatchObject({
    formattedValue: 'h\\"e\\\\l\\"loWorld02\\"',
    result: true,
  });
  expect(jsonFormatter('hello\\World"01')).toMatchObject({
    formattedValue: 'hello\\\\World\\"01',
    result: true,
  });
  expect(jsonFormatter('hello\\W\\orld"01')).toMatchObject({
    formattedValue: 'hello\\\\W\\\\orld\\"01',
    result: true,
  });
});
