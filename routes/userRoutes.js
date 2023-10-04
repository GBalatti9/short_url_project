const express = require('express');

const { getLogin, postLogin } = require('../controllers/userControllers');
const { validateLoginAdmin } = require('../middlewares/validations/index');

const router = express.Router();

// @GET --> /login
router.get('/login', getLogin);

// @POST --> /login
router.post('/login', validateLoginAdmin, postLogin);

module.exports = {
    userRoutes: router,
}