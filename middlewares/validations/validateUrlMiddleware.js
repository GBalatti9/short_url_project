const { check } = require('../../plugins/get-express-validator.plugin');
// const { check } = require('express-validator');

const validateUrl = [
    check('longUrl')
        .notEmpty().withMessage('No puede estar vacío')
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i)
        .withMessage('Debe ser una URL válida con "http://" o "https://" al principio'),
]

module.exports = {
    validateUrl
}
