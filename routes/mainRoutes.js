const express = require('express');
const { getIndex, postIndex } = require('../controllers/mainControllers');

const router = express.Router();

// @GET --> /
router.get('/', getIndex);

// @POST -->
router.post('/', postIndex);

module.exports = {
    router,
}