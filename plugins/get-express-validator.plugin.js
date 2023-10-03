const { check } = require('express-validator');

const checkValidations = () => {
    return check()
}

module.exports = {
    check: checkValidations,
}