const express = require('express');
const { getAdmin, postAdmin, getDashboard } = require('../controllers/adminControllers');

const router = express.Router();

// @GET --> /admin
router.get('/adminLogin', getAdmin);

// @POST --> /admin
router.post('/adminLogin', postAdmin);

// @GET --> /admin
router.get('/admin', getDashboard);

module.exports = {
    adminRoutes: router,
}