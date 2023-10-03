const { check } = require('../../plugins/get-express-validator.plugin');

const validateCreateUser = [
    check('registerEmail')
        .notEmpty().withMessage('No puede estar vacío'),
    check('registerPassword')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/)
        .withMessage('La contraseña debe tener al menos 1 mayúscula, 1 minúscula, 1 carácter especial y 1 número, y ser de al menos 8 caracteres de longitud'),
    check('registerPasswordCheck')
        .notEmpty()
        .withMessage('No puede estar vacía la verificación de contraseña'),
    check('registerCategory')
        .notEmpty()
        .withMessage('Elija una categoría'),
    
]

module.exports = {
    validateCreateUser
}
