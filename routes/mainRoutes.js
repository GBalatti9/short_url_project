const express = require('express');
const { getIndex, postIndex, getUrlLink } = require('../controllers/mainControllers');
const { validateUrl } = require('../middlewares/validations/index');

const router = express.Router();

// @GET --> /
router.get('/', getIndex);

// @POST -->
router.post('/', validateUrl, postIndex);

// @GET --> urlIdUnique
router.get('/:urlIdUnique', getUrlLink)

module.exports = {
    mainRoutes: router,
}