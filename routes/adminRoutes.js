const express = require('express');
const { getAdmin, postAdmin, getDashboard, postUser, deleteUser } = require('../controllers/adminControllers');

const router = express.Router();


// @GET --> /admin
router.get('/adminLogin', getAdmin);

// @POST --> /admin
router.post('/adminLogin', postAdmin);

// @POST --> /createUser
router.post('/createUser', postUser);

// @DELETE --> /admin/:id/delete
router.delete('/admin/:id/delete', deleteUser);

// @GET --> /admin
router.get('/admin', getDashboard);

module.exports = {
    adminRoutes: router,
}