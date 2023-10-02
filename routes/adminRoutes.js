const express = require('express');
const { getAdmin, postAdmin } = require('../controllers/adminControllers');

const router = express.Router();

// @GET --> /admin
router.get('/admin', getAdmin);

// @POST --> /admin
router.post('/admin', postAdmin);

module.exports = {
    adminRoutes: router,
}