const { validateUrl } = require('./validateUrlMiddleware');
const { validateCreateUser } = require('./validateCreateUser');
const { validateLoginAdmin } = require('./validateLoginAdmin');

module.exports = {
    validateUrl,
    validateCreateUser,
    validateLoginAdmin,
}