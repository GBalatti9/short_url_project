const { validateUrl } = require('./validations/validateUrlMiddleware');
const { validateCreateUser } = require('./validations/validateCreateUser');

module.exports = {
    validateUrl,
    validateCreateUser
}