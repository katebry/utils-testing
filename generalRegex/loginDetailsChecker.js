function validUserName(value) {
  if (!value) return false;
  const userNameRegex = /^[a-zA-Z0-9!@#$£%^&*(~)_+\-=\[\]{}:"'\\|,.\/?]{8,30}$/;
  const result = userNameRegex.test(value);
  return result;
}

function validPassword(value) {
  if (!value) return false;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$€£%^&*¬(~)_+\-=\[\]{};':"\\|,.\/?])[a-zA-Z0-9!@#$£%^&*¬(~)_+\-=\[\]{};':"\\|,.\/?]{8,20}$/;
  const result = passwordRegex.test(value);
  return result;
}

module.exports = {
  validUserName,
  validPassword,
};
