function nonConsecutiveNumbers(value) {
  const valueArray = value.split("").map((item) => {
    return parseInt(item, 10);
  });

  let match = 0;

  if (valueArray[1] + 1 === valueArray[0]) {
    valueArray.reverse();
  }

  for (let i = 0; i < valueArray.length - 1; i++) {
    if (valueArray[i + 1] !== valueArray[i] + 1) {
      match++;
    }
  }
  return match >= 1;
}

function validSecurityCode(value) {
  if (!value) return false;
  if (nonConsecutiveNumbers(value)) {
    const securityCodeRegex = /^(?!.*(\d)\1{2})[0-9]{6,6}$/;
    const result = securityCodeRegex.test(value);
    return result;
  } else {
    return false;
  }
}

module.exports = { nonConsecutiveNumbers, validSecurityCode };
