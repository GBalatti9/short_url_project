const express = require('express');
const { getIndex, postIndex, getUrlLink } = require('../controllers/mainControllers');

const router = express.Router();

// @GET --> /
router.get('/', getIndex);

// @POST -->
router.post('/', postIndex);

// @GET --> urlIdUnique
router.get('/:urlIdUnique', getUrlLink)

module.exports = {
    router,
}