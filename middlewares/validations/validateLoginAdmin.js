const { check } = require('../../plugins/get-express-validator.plugin');

const validation = [
    check('loginEmail').notEmpty().withMessage('El mail no puede estar vacío'),
    check('loginPassword').notEmpty().withMessage('La contraseña no puede estar vacía'),
]

module.exports = {
    validateLoginAdmin: validation,
}