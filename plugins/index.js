const { id } = require('./get-shortid.plugin');
const { hashPassword, comparePassword } = require('./get-bcrypt.plugin');
const { check, validationResult } = require('./get-express-validator.plugin');

module.exports = {
    id,
    hashPassword,
    comparePassword,
    check,
    validationResult,
}