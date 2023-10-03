const { hashSync, compareSync } = require('bcrypt');

const hashPassword = (password) => {
    return hashSync(password, 12);
}

const comparePassword = (password, checkPassword) => {
    return compareSync(password, checkPassword);
}

module.exports = {
    hashPassword,
    comparePassword,
}