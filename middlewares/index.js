const { validateUrl } = require('./validations/validateUrlMiddleware');
const { validateCreateUser } = require('./validations/validateCreateUser');
const { validateLoginAdmin } = require('./validations/validateLoginAdmin');

module.exports = {
    validateUrl,
    validateCreateUser,
    validateLoginAdmin,
}