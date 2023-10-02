const express = require('express');
const { getAdmin } = require('../controllers/adminControllers');

const router = express.Router();

// @GET --> /admin
router.get('/admin', getAdmin);

module.exports = {
    adminRoutes: router,
}