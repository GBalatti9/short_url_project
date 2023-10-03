const { id } = require('./get-shortid.plugin');
const { hashPassword, comparePassword } = require('./get-bcrypt.plugin');

module.exports = {
    id,
    hashPassword,
    comparePassword
}