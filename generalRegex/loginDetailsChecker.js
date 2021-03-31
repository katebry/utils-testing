function validUserName(value) {
  if (!value) return false;
  const userNameRegex = /^[a-zA-Z0-9!@#$£%^&*(~)_+\-=\[\]{}:"'\\|,.\/?]{8,30}$/;
  const result = userNameRegex.test(value);
  return result;
}

function jsonFormatter(value) {
  let formattedValue = "";
  const specialCharactersRegex = /["\\]/;
  const result = specialCharactersRegex.test(value);
  if (result) {
    const res = value.replace(/\\/g, "\\\\");
    formattedValue = res.replace(/"/g, '\\"');
  }
  return { result, formattedValue };
}

function validPassword(value) {
  if (!value) return false;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$€£%^&*¬(~)_+\-=\[\]{};':"\\|,.\/?])[a-zA-Z0-9!@#$£%^&*¬(~)_+\-=\[\]{};':"\\|,.\/?]{8,20}$/;
  const result = passwordRegex.test(value);
  return result;
}

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

module.exports = {
  validUserName,
  jsonFormatter,
  validPassword,
  nonConsecutiveNumbers,
  validSecurityCode,
};
