const express = require('express');
const controller = require('../controllers/applicationController');
const router = express.Router();

router.post("/applications", controller.create);

module.exports = router;