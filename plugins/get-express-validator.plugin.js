const { check, validationResult } = require('express-validator');

const checkValidations = () => {
    return check;
}

const createValidationResult = (req) => {
    return validationResult(req);
}

module.exports = {
    check: checkValidations(),
    validationResult: createValidationResult,
}