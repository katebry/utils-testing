function validUserName(value) {
    if (!value) return false;
    const userNameRegex = /^[a-zA-Z0-9!@#$£%^&*(~)_+\-=\[\]{}:"'\\|,.\/?]{8,30}$/;
    return userNameRegex.test(value);
}

function validPassword(value) {
    if (!value) return false;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$€£%^&*¬(~)_+\-=\[\]{};':"\\|,.\/?])[a-zA-Z0-9!@#$£%^&*¬(~)_+\-=\[\]{};':"\\|,.\/?]{8,20}$/;
    return passwordRegex.test(value);
}

module.exports = {
    validUserName,
    validPassword,
};
